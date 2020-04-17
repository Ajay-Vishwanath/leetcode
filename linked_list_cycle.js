var hasCycle = function (head) {
    const seenNodes = new Set();

    let currentNode = head;
    while (currentNode) {
        if (seenNodes.has(currentNode)) {
            return true;
        }

        seenNodes.add(currentNode);
        currentNode = currentNode.next;
    }
    return false;
};