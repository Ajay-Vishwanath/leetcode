var mergeTwoLists = function (l1, l2) {
  let newLinkedList = new ListNode(-1);
  let head = newLinkedList;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      newLinkedList.next = l1;
      l1 = l1.next;
    } else {
      newLinkedList.next = l2;
      l2 = l2.next;
    }

    newLinkedList = newLinkedList.next;
  }

  if (!l1) {
    newLinkedList.next = l2;
  } else if (!l2) {
    newLinkedList.next = l1;
  }

  return head.next;
};
