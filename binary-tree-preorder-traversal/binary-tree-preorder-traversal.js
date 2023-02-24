/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//recursive
// var preorderTraversal = function(root) {
//   let result = [];
//   trav(root, result);
//     //after trav() is done, returns result
//   return result;
// }

// //this performs the actual traversal
// //node = current node visited, and the result array
// function trav(node, result) {
//     //checks if current node is null, if so, it is terminated
//   if (node === null) {
//     return;
//   }
//     //if not null, adds current node value to result
//   result.push(node.val); //Step 1 of pre-order traversal
//     //recursively calls itself w/ left child of curr node as the new node arg, then right.
//   trav(node.left, result);//Step 2
//   trav(node.right, result); //Step 3
// };

//iteratively
//uses Stack DS to keep track of nodes visited. 
//Stack is LIFO, last node pushed will be first node popped
var preorderTraversal = function(root) {
  if (root === null) {
    return [];
  }
  //Init the stack with root node and empty result []
  let stack = [root];
  let result = [];
  //Enter while loop until stack is empty
  while (stack.length > 0) {
      //remove top most node and push to result []. pop removes last most element.
    let node = stack.pop();
    result.push(node.val);
    // if children are not null, push in reverse order, right then left
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  
  return result;
};
