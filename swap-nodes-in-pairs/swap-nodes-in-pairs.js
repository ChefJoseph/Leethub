/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//recursive, S&T: O(n), visit each node once, and as deep as n
function swapPairs(head) {
  if (!head || !head.next) {
    // base case: empty list or only one node
    return head;
  }
  
  // save the next node to use in the recursion
  const nextPair = head.next.next;
  
  // swap the adjacent nodes
  const newHead = head.next;
  newHead.next = head;
  head.next = swapPairs(nextPair);
  
  // return the new head of the swapped pair
  return newHead;
}