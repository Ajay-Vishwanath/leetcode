var isSameTree = function (p, q) {
    //working down to the leaves of the tree
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    return p.val === q.val && isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};