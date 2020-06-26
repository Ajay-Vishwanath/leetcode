var hasPathSum = function (root, sum) {
    //reached leaf node and sum hasn't equaled zero
    if (!root) {
        return false;
    } else if (root.right === null && root.left === null && sum - root.val === 0) {
        return true;
    } else {
        return hasPathSum(root.right, sum - root.val) || hasPathSum(root.left, sum - root.val)
    }
};