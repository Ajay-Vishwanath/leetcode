var isSubtree = function (s, t) {
    if (s === null) return false

    return isSameTree(s, t) || isSubtree(s.right, t) || isSubtree(s.left, t)
};

var isSameTree = function (s, t) {
    if (s === null && t === null) return true
    if (s === null || t === null) return false

    return s.val === t.val && isSameTree(s.right, t.right) && isSameTree(s.left, t.left)
}