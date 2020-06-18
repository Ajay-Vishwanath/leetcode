var hasCycle = function (head) {
    let slowRunner = head;
    let fastRunner = head;

    while (fastRunner && fastRunner.next) {
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        if (slowRunner === fastRunner) {
            return true;
        }
    }

    //reached the end of the linked list
    return false;
};

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