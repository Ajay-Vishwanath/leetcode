var serialize = function (root) {
    if (root === null) return 'null';

    let left = serialize(root.left);
    let right = serialize(root.right);

    return root.val.toString() + "," + left + "," + right
};

var deserialize = function (data) {
    if (data === null) return null;
    const queue = data.split(',');
    return deserializeHelper(queue);
};

var deserializeHelper = function (queue) {
    if (queue.length < 1) return;
    let nodeValue = queue.shift();
    if (nodeValue === 'null') return null;

    let newNode = new TreeNode(parseInt(nodeValue));
    newNode.left = deserializeHelper(queue);
    newNode.right = deserializeHelper(queue);

    //the last node to return will be the root when its right and left are finally resolved.
    return newNode
}