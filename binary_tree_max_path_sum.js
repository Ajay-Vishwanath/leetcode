var maxSum;

var maxPathSum = function (root) {
    maxSum = Number.NEGATIVE_INFINITY;
    pathSum(root);
    return maxSum;
};

var pathSum = function (root) {
    if (root === null) return 0;

    let left = Math.max(0, pathSum(root.left));
    let right = Math.max(0, pathSum(root.right));
    maxSum = Math.max(maxSum, left + right + root.val);
    return Math.max(left, right) + root.val;
}