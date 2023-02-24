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
// function swapPairs(head) {
//   if (!head || !head.next) {
//     // base case: empty list or only one node
//     return head;
//   }
  
//   // save the next node to use in the recursion
//   const nextPair = head.next.next;
  
//   // swap the adjacent nodes
//   const newHead = head.next;
//   newHead.next = head;
//   head.next = swapPairs(nextPair);
  
//   // return the new head of the swapped pair
//   return newHead;
// }

//iteratively S&T: O(n), O(1), visit each node once, and store a constant number of pointers

var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let prev = dummyHead;
    
    while (head && head.next) {
        let first = head;
        let second = head.next;
        let next = second.next;
        
        prev.next = second;
        second.next = first;
        first.next = next;
        
        prev = first;
        head = next;
    }
    
    return dummyHead.next;
};