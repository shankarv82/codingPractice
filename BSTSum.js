// Sum all the values in balanced BST
const sum = (node) => {
  if (!node) {
    return 0;
  }

  return node.value + sum(node.left) + sum(node.right);
}
