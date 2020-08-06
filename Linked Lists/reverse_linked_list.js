//iterative solution
var reverseList = function (head) {
  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
};

//recursive solution
let result;

reverseList = function (head) {
  if (!head) {
    return head;
  }

  //reached the last node
  if (!head.next) {
    result = head;
    return head;
  }

  reverseList(head.next);
  head.next.next = head;
  head.next = undefined;

  return result;
};
