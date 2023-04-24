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

  isCompleteBT(root) {
    // Base Case: An empty tree
    // is complete Binary Tree
    if (root == null) return true;

    // Create an empty queue
    var queue = [];

    // Create a flag variable which will be set true
    // when a non full node is seen
    var flag = false;

    // Do level order traversal using queue.
    queue.push(root);
    while (queue.length != 0) {
      var temp_node = queue.shift();

      /* Check if left child is present*/
      if (temp_node.left != null) {
        // If we have seen a non full node,
        // and we see a node with non-empty
        // left child, then the given tree is not
        // a complete Binary Tree
        if (flag == true) return false;

        // push Left Child
        queue.push(temp_node.left);
      }

      // If this a non-full node, set the flag as true
      else flag = true;

      /* Check if right child is present*/
      if (temp_node.right != null) {
        // If we have seen a non full node,
        // and we see a node with non-empty
        // right child, then the given tree
        // is not a complete Binary Tree
        if (flag == true) return false;

        // push Right Child
        queue.push(temp_node.right);
      }

      // If this a non-full node,
      // set the flag as true
      else flag = true;
    }

    // If we reach here, then the
    // tree is complete Binary Tree
    return true;
  }
}

const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);

console.log("Complete Binary Tree", tree.isCompleteBT(tree.root));
