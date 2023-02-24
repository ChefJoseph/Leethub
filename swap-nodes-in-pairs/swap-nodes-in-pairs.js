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
//visualization: 
// Before swap:
// 1 -> 2 -> 3 -> 4 -> null

// After first swap:
// 2 -> 1 -> 3 -> 4 -> null

// After second swap:
// 2 -> 1 -> 4 -> 3 -> null

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
    // Create a dummy node to serve as the new head
    let dummyHead = new ListNode(0);
    // Point the dummy node to the original head
    dummyHead.next = head;
    // Create a pointer to the dummy node
    let prev = dummyHead;
    
    // Loop through the linked list, swapping adjacent nodes
    while (head && head.next) {
        // Create pointers to the two nodes to be swapped
        let first = head;
        let second = head.next;
        // swap
        let next = second.next;
        prev.next = second;
        
        second.next = first;
        first.next = next;
        
        prev = first;
        head = next;
    }
    // Return the new head (which is the dummy node's next node)
    return dummyHead.next;
};