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

//linear data structure
//can be stored sequentially, improves space
    //array is quick to look-up but needs contiguos block of space

//create a previous node to null
//change pointer to prev
//create ref to next node
//set next pointer to prev node
 
// iteratively
//T O(n)
//S O(1)
// var reverseList = function(head) {
// //init prev
//     let prev = null;
   
//     while(head){
//         //reference next node
//         let nextNode = head.next;
//         //flip pointer
//         head.next = prev;
//         //move prev to head
//         prev = head;
//         //move head to nextNode
//         head = nextNode;
//     }
//         //head is now at null and breaks While-loop
//         //Prev is at the end with pointers flipped 
//     return prev;
// };

//recursive S&T: O(n)
function reverseList(head) {
  // base case: if the node is null or the next node is null, return the node
  if (head == null || head.next == null) {
    return head;
  }
  
  // recursive case: reverse the list starting from the next node
  const newHead = reverseList(head.next);
  
  // attach the current node to the end of the reversed list
  head.next.next = head;
  head.next = null;
  
  return newHead;
}