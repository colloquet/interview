class TreeNode {
  val: number;
  left: TreeNode;
  right: TreeNode;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode;

  constructor() {
    this.root = null;
  }

  insert(val: number) {
    const node = new TreeNode(val);

    if (!this.root) {
      this.root = node;
      return;
    }

    this.insertNode(this.root, node);
  }

  insertNode(node: TreeNode, newNode: TreeNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  remove(val: number) {
    this.root = this.removeNode(this.root, val);
  }

  removeNode(node: TreeNode, val: number): TreeNode {
    if (node === null) return null;

    if (val < node.val) {
      node.left = this.removeNode(node.left, val);
      return node;
    }

    if (val > node.val) {
      node.right = this.removeNode(node.right, val);
      return node;
    }

    // val equals to node's val
    // no children
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // only has right
    if (node.left === null) {
      node = node.right;
      return node;
    }

    // only has left
    if (node.right === null) {
      node = node.left;
      return node;
    }

    // both exists
    // find min node on right tree, replace current with min node, remove min node from right tree
    const minNode = this.findMinNode(node.right);
    node.val = minNode.val;
    node.right = this.removeNode(node.right, minNode.val);
    return node;
  }

  findMinNode(node: TreeNode): TreeNode {
    if (node.left === null) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  getRootNode() {
    return this.root;
  }

  preorder(node: TreeNode) {
    if (node !== null) {
      console.log(node.val);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }

  inorder(node: TreeNode) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.val);
      this.inorder(node.right);
    }
  }

  postorder(node: TreeNode) {
    if (node !== null) {
      this.inorder(node.left);
      this.inorder(node.right);
      console.log(node.val);
    }
  }

  searchEntireTree(val: number) {
    if (!this.root) return null;

    return this.searchNode(this.root, val);
  }

  searchNode(node: TreeNode, val: number) {
    if (!node) return null;

    let currentNode = node;
    while (currentNode) {
      if (currentNode.val === val) {
        break;
      }

      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return currentNode;
  }

  flip(node: TreeNode): TreeNode {
    if (!node) return null;

    const temp = node.left;
    node.left = node.right;
    node.right = temp;

    if (node.left) {
      node.left = this.flip(node.left);
    }

    if (node.right) {
      node.right = this.flip(node.right);
    }

    return node;
  }

  maxDepth(node: TreeNode) {
    if (!node) return 0;

    const leftDepth = this.maxDepth(node.left);
    const rightDepth = this.maxDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  maxDistance(node: TreeNode) {
    if (!node) return 0;
    let distance = 0;

    function recursion(node) {
      if (!node) return 0;
      const leftDepth = recursion(node.left);
      const rightDepth = recursion(node.right);
  
      distance = Math.max(distance, (leftDepth + rightDepth + 1));
      return Math.max(leftDepth, rightDepth) + 1;
    }

    recursion(node);
    return distance;
  }

  maxPathSum() {
    let maxSum = -Infinity; // 纪录保持者
    const dfs = (root: TreeNode) => {
      if (root == null) return 0; // 递归的出口
      const left = Math.max(0, dfs(root.left)); // 處理負數
      const right = Math.max(0, dfs(root.right)); // 處理負數
      maxSum = Math.max(maxSum, left + root.val + right); //当前子树的maxSum挑战最大值
      return root.val + Math.max(left, right); // 向父节点提供的最大和，要包括自己
    };
    dfs(this.root); // 递归的入口
    return maxSum;
  }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(2);
tree.insert(5);
tree.insert(6);
tree.insert(7);
tree.insert(8);
tree.insert(12);

const root = tree.getRootNode();
// console.log(JSON.stringify(root, null, 2));

const result = tree.maxDistance(root);
console.log(result);
