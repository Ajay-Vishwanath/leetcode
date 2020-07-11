var cloneGraph = function (node) {

    if (!node) {
        return undefined;
    }

    //queue contains original nodes of graph
    const queue = [node]
    const rootNode = new Node(node.val, [])
    //hashmap tracks which new nodes we have made
    const hashMap = {};
    hashMap[node.val] = rootNode;

    while (queue.length > 0) {
        const currentNode = queue.shift();
        for (i = 0; i < currentNode.neighbors.length; i++) {
            let neighbor = currentNode.neighbors[i]
            if (!hashMap[neighbor.val]) {
                const newNode = new Node(neighbor.val, []);
                hashMap[neighbor.val] = newNode
                queue.push(neighbor)
            }
            //happens in either case
            hashMap[currentNode.val].neighbors.push(hashMap[neighbor.val])
        }
    }
    return rootNode;
};