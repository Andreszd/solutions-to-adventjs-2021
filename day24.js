function checkIsSameTree(treeA, treeB) {
  if (treeA === null && treeB === null) {
    return true;
  } else {
    if (treeA?.value !== treeB?.value) return false;
    return (
      checkIsSameTree(treeA.left, treeB.left) &&
      checkIsSameTree(treeA.right, treeB.right)
    );
  }
}
