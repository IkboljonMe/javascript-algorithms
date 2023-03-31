function detectCycle(head) {
  let slow = head;
  let fast = head;
  let isCycle = false;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      isCycle = true;
      break;
    }
  }
  if (!isCycle) {
    return null;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
module.exports = detectCycle;
