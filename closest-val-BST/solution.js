function findClosestValueInBst(tree, target) {
  let currentNode = tree;
  let closest = tree.value;

  while (currentNode) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
      closest = currentNode.value;
    }

    if (currentNode.value < target) {
      currentNode = currentNode.right;
    } else if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      break;
    }
  }

  return closest;
}
