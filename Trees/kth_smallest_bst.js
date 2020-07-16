var kthSmallest = function (root, k) {
    let inOrder = kthSmallestHelper(root);
    return inOrder[k - 1];
};

var kthSmallestHelper = function (root) {
    if (!root) return [];

    return kthSmallestHelper(root.left).concat([root.val]).concat(kthSmallestHelper(root.right))
}