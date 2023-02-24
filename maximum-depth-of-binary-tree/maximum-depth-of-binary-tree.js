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
 * @return {number}
 */
//iterative
const maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    let depth = 0;
    let queue = [root];
    
    while (queue.length > 0) {
        let levelLength = queue.length;
        for (let i = 0; i < levelLength; i++) {
            let currentNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        depth++;
    }
    
    return depth;
};

//bfs
// const maxDepth = function(root) {
//     if (!root) return 0; // Edge case: empty tree

//     let depth = 0;
//     const queue = [root];

//     while (queue.length) {
//         const levelSize = queue.length;

//         for (let i = 0; i < levelSize; i++) {
//             const node = queue.shift();

//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }

//         depth++;
//     }

//     return depth;
// };

//dfs
// const maxDepth = function(root) {
//   if (!root) {
//     return 0;
//   }
//   if (!root.left && !root.right) {
//     return 1;
//   }
//   let leftDepth = maxDepth(root.left);
//   let rightDepth = maxDepth(root.right);
//   return Math.max(leftDepth, rightDepth) + 1;
// };

// Class method
// class TreeNode {
//   constructor(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// const maxDepth = function(root) {
//   if (!root) return 0; // if tree is empty, depth is 0
//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// };

// example usage:

// const tree = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(
//     20,
//     new TreeNode(15),
//     new TreeNode(7)
//   )
// );
// console.log(maxDepth(tree)); // output: 3


//prototypal inheritance (not working, error maxDepth not defined)
// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val);
//   this.left = (left === undefined ? null : left);
//   this.right = (right === undefined ? null : right);
// }

// TreeNode.prototype.maxDepth = function() {
//   if (!this) return 0;
//   const leftDepth = this.left ? this.left.maxDepth() : 0;
//   const rightDepth = this.right ? this.right.maxDepth() : 0;
//   return 1 + Math.max(leftDepth, rightDepth);
// };
