class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

const ckeckHeight = (node) => {
  if (node === null) return 0;

  const left = ckeckHeight(node.left);
  const right = ckeckHeight(node.right);

  if (
    // if a previous call has returned false,
    // we need to pass false all the way up
    left === false ||
    right === false ||
    Math.abs(left - right) > 1
  ) {
    return false;
  }

  // height of a node
  return Math.max(left, right) + 1;
};

const isBalanced = (root) => {
  if (root === null) return true;

  return ckeckHeight(root) !== false;
};

console.log("is balanced binary tree ,", isBalanced(root));
