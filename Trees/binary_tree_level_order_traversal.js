var levelOrder = function (root) {

    const result = [];
    if (root === null) return result;

    const queue = [root];

    while (queue.length > 0) {
        let size = queue.length;
        let currentLevel = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
            currentLevel.push(node.val);
        }
        result.push(currentLevel);
    }
    return result;
};