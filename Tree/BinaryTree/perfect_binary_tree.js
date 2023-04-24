class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  findADepth(node) {
    var d = 0;

    while (node != null) {
      d++;
      node = node.left;
    }
    return d;
  }

  isPerfect(root) {
    var d = this.findADepth(root);
    return this.isPerfectRec(root, d, 0);
  }

  isPerfectRec(root, d, level) {
    // An empty tree is perfect
    if (root == null) return true;

    // If leaf node, then its depth must be same as
    // depth of all other leaves.
    if (root.left == null && root.right == null) return d == level + 1;

    // If internal node and one child is empty
    if (root.left == null || root.right == null) return false;

    // Left and right subtrees must be perfect.
    return (
      this.isPerfectRec(root.left, d, level + 1) &&
      this.isPerfectRec(root.right, d, level + 1)
    );
  }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

console.log("Perfect Binary Tree", tree.isPerfect(tree.root));
