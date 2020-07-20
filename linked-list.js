var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

var Node = function (val) {
  this.val = val;
  this.next = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index >= this.size) return -1;

  let count = 0;
  let current = this.head;
  while (count < index) {
    count++;
    current = current.next;
  }
  return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.head === null) {
    this.head = new Node(val);
    this.size++;
    return;
  }

  const newHead = new Node(val);
  newHead.next = this.head;
  this.head = newHead;
  this.size++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.head === null) {
    this.head = new Node(val);
    this.size++;
    return;
  }

  let prev = null;
  let current = this.head;
  while (current) {
    prev = current;
    current = current.next;
  }
  prev.next = new Node(val);
  this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return;

  let count = 0;
  let prev = null;
  let current = this.head;
  while (count < index) {
    count++;
    prev = current;
    current = current.next;
  }

  const newNode = new Node(val);
  newNode.next = current;
  prev.next = newNode;
  this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size) return;

  let count = 0;
  let current = this.head;
  let prev = current;
  if (index === 0) {
    this.head = current.next;
  } else {
    while (count < index) {
      count++;
      prev = current;
      current = current.next;
    }

    prev.next = current.next;
  }
  this.size--;
};

MyLinkedList.prototype.toString = function () {
  let result = [];

  let current = this.head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result.join(', ');
};

const linkedList = new MyLinkedList();
console.log(linkedList.addAtHead(2));
console.log(linkedList.deleteAtIndex(1));
console.log(linkedList.addAtHead(2));
console.log(linkedList.addAtHead(7));
console.log(linkedList.addAtHead(3));
console.log(linkedList.addAtHead(2));
console.log(linkedList.addAtHead(5));
console.log(linkedList.addAtTail(5));
console.log(linkedList.get(5));
console.log(linkedList.deleteAtIndex(6));
console.log(linkedList.deleteAtIndex(4));
console.log(linkedList.toString());
