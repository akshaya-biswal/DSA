class Node {
  constructor(d) {
    this.key = d;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // get the current node height
  height(N) {
    if (N == null) return 0;
    return N.height;
  }

  // maximum of two integers
  max(a, b) {
    return a > b ? a : b;
  }

  // rotate subtree rooted with y
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    // Return new root
    return x;
  }

  // rotate subtree rooted with x
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

    // Return new root
    return y;
  }

  // Get Balance factor of node N
  getBalance(N) {
    if (N == null) return 0;

    return this.height(N.left) - this.height(N.right);
  }

  insert(node, key) {
    // Perform the normal BST insertion
    if (node == null) return new Node(key);

    if (key < node.key) {
      node.left = this.insert(node.left, key);
    } else if (key > node.key) {
      node.right = this.insert(node.right, key);
    } else {
      console.log("Duplicate keys not allowed");
      return node;
    }

    // Update height of this ancestor node
    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    // Get the balance factor of this ancestor node to check whether this node became unbalanced
    const balance = this.getBalance(node);

    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && key < node.left.key) return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && key > node.right.key) return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
  }

  // A utility function to print preorder traversal
  preOrder(node) {
    if (node != null) {
      document.write(node.key + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}

const tree = new AVLTree();

tree.root = tree.insert(tree.root, 10);
tree.root = tree.insert(tree.root, 20);
tree.root = tree.insert(tree.root, 30);
tree.root = tree.insert(tree.root, 40);
tree.root = tree.insert(tree.root, 50);
tree.root = tree.insert(tree.root, 25);

console.log("Preorder traversal of the AVL tree is", tree.preOrder(tree.root));

//     30
//    / \
//   20  40
//  / \   \
// 10 25  50
