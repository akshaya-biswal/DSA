class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class FBT {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  isFullTree(node) {
    // if empty tree
    if (node === null) {
      return true;
    }

    // if leaf node
    if (node.left === null && node.right === null) {
      return true;
    }

    // if both left and right subtrees are not null
    if (node.left !== null && node.right !== null) {
      return this.isFullTree(node.left) && this.isFullTree(node.right);
    }

    // if none work
    return false;
  }
}

const tree = new FBT();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);
console.log("Full Binary Tree", tree.isFullTree(tree.root));
