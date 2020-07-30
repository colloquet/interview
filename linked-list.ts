class ListNode {
  val: number;
  next: ListNode;

  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  head: ListNode;

  constructor(head = null) {
    this.head = head;
  }

  setHead(node: ListNode) {
    this.head = node;
  }

  addAtHead(val) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  addAtIndex(index, val) {
    const newNode = new ListNode(val);

    if (!this.head) return;
    if (index === 0) {
      this.addAtHead(val);
      return;
    }

    let count = 0;
    let currentNode = this.head;
    let prev = null;
    while (count < index && currentNode) {
      prev = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    if (count !== index) return;

    prev.next = newNode;
    newNode.next = currentNode;
  }

  addAtTail(val) {
    const newNode = new ListNode(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let prev = null;
    while (currentNode) {
      prev = currentNode;
      currentNode = currentNode.next;
    }

    prev.next = newNode;
  }

  removeHead() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeAtIndex(index) {
    if (!this.head) return;

    if (index === 0) {
      this.removeHead();
      return;
    }

    let count = 0;
    let currentNode = this.head;
    let prev = null;
    while (count < index && currentNode) {
      prev = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    console.log(count);
    if (count !== index) return;

    prev.next = currentNode ? currentNode.next : null;
  }

  removeTail() {
    if (!this.head) return;

    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      index++;
    }

    this.removeAtIndex(index);
  }

  getHead() {
    return this.head;
  }

  getAtIndex(index) {
    if (!this.head) return null;

    if (index === 0) return this.head;

    let count = 0;
    let currentNode = this.head;
    while (count < index && currentNode) {
      currentNode = currentNode.next;
      count++;
    }

    if (count !== index) return null;

    return currentNode;
  }

  getTail() {
    if (!this.head) return null;

    let currentNode = this.head;
    let prev = null;
    while (currentNode) {
      prev = currentNode;
      currentNode = currentNode.next;
    }

    return prev;
  }

  toString() {
    if (!this.head) return '';

    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return result.join(', ');
  }
}

function merge(list1: LinkedList, list2: LinkedList) {
  const newNode = new ListNode(null, null);
  const list1Head = list1.getHead();
  const list2Head = list2.getHead();

  let list1Current = list1Head;
  let list2Current = list2Head;
  let prev = newNode;

  while (list1Current && list2Current) {
    if (list1Current.val < list2Current.val) {
      prev.next = list1Current;
      list1Current = list1Current.next;
    } else {
      prev.next = list2Current;
      list2Current = list2Current.next;
    }
    prev = prev.next;
  }

  if (list1Current) {
    prev.next = list1Current;
  } else {
    prev.next = list2Current;
  }

  return new LinkedList(newNode.next);
}

function hasLoop(list: LinkedList) {
  const head = list.getHead();
  let i = head;
  let j = head;

  while (j && j.next) {
    i = i.next;
    j = j.next.next;

    if (i === j) return true;
  }

  return false;
}

function getLoopEntrance(list: LinkedList) {
  const head = list.getHead();
  let i = head;
  let j = head;

  while (j && j.next) {
    i = i.next;
    j = j.next.next;

    if (i === j) break;
  }

  i = head;
  while (true) {
    if (i === j) break;
    i = i.next;
    j = j.next;
  }

  return i;
}

function reverse(list: LinkedList) {
  const head = list.getHead();

  let node = head;
  let prev = null;

  while (node) {
    let save = node.next;
    node.next = prev;
    prev = node;
    node = save;
  }

  list.setHead(prev);
}

const n = new ListNode(1);
const list = new LinkedList(n);
list.addAtTail(2);
list.addAtTail(3);
list.addAtTail(4);
list.addAtTail(5);
list.addAtTail(6);
list.addAtTail(7);
list.addAtTail(8);
// const tail = list.getTail();
// tail.next = list.getAtIndex(4);

reverse(list);

console.log(list.toString());

// console.log(hasLoop(list));
// console.log(getLoopEntrance(list));
// console.log(tail);

// console.log(hasLoop(list2));
// console.log(list2.toString());

// console.log(merge(list, list2).toString());
