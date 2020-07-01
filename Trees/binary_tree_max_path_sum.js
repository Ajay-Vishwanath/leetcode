var maxSum;

var maxPathSum = function (root) {
    maxSum = Number.NEGATIVE_INFINITY;
    //needs to be a separate function because needs to return a non-maxsum value every time.
    pathSum(root);
    return maxSum;
};

var pathSum = function (root) {
    if (root === null) return 0;

    let left = Math.max(0, pathSum(root.left));
    let right = Math.max(0, pathSum(root.right));
    //only the root can diverge left and right, the other nodes have to go left or right or neither (0);
    maxSum = Math.max(maxSum, left + right + root.val);
    return Math.max(left, right) + root.val;
}