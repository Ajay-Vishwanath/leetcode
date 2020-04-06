var invertTree = function (root) {
    if (root === null) return root;

    let tempLeftNode = root.left;
    root.left = root.right;
    root.right = tempLeftNode;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};