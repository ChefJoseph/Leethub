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
//recursive S/T O(n)
// function postorderTraversal(root) {
//   const result = [];

//   function traverse(node) {
//     if (!node) {
//       return;
//     }

//     traverse(node.left);
//     traverse(node.right);
//     result.push(node.val);
//   }

//   traverse(root);
//   return result;
// }

//iterative S/T O(n)
function postorderTraversal(root) {
  const result = [];
  const stack = [];

  if (!root) {
    return result;
  }

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }

    result.unshift(node.val);
  }

  return result;
}