class Node {
  constructor() {
    this.key = 0;
    this.left = null;
    this.right = null;
  }
}

// Returns depth of leftmost leaf.
function findADepth(node) {
  let d = 0;

  while (node != null) {
    d++;
    node = node.left;
  }
  return d;
}

function isPerfectRec(root, d, level) {
  // An empty tree is perfect
  if (root == null) return true;

  // If leaf node, then its depth must be same as
  // depth of all other leaves.
  if (root.left == null && root.right == null) return d == level + 1;

  // If internal node and one child is empty
  if (root.left == null || root.right == null) return false;

  // Left and right subtrees must be perfect.
  return (
    isPerfectRec(root.left, d, level + 1) &&
    isPerfectRec(root.right, d, level + 1)
  );
}

function isPerfect(root) {
  let d = findADepth(root);
  return isPerfectRec(root, d, 0);
}

function newNode(k) {
  const node = new Node();
  node.key = k;
  node.right = null;
  node.left = null;
  return node;
}

const root = newNode(10);
root.left = newNode(20);
root.right = newNode(30);
root.left.left = newNode(40);
root.left.right = newNode(50);
root.right.left = newNode(60);
root.right.right = newNode(70);

if (isPerfect(root)) {
  console.log("Yes");
} else {
  console.log("No");
}
