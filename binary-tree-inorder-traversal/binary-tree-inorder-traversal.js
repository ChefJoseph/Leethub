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
// function inorderTraversal(root) {
//   const result = [];
//     //(root = F, [])
//   traverse(root, result);
//   return result;
// }

// function traverse(node, result) {
//   if (node === null) {
//     return;
//   }
//     //stay on left children until null,
//   traverse(node.left, result);
//   result.push(node.val);
//   traverse(node.right, result);
// }

//iterative
function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let curr = root;
  
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    
    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  
  return result;
}