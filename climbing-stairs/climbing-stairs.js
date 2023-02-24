/**
 * @param {number} n
 * @return {number}
 */
//fibonacci?
//iterative T&S O(n) O(1)
const climbStairs = function (numberOfStairs) {
  let previous = 0
  let current = 1
  
  for (let index = 1; index <= numberOfStairs; index += 1) {
    current += previous
    previous = current - previous

  }
  return current
};

//recursive T: O(2^n), S: O(n)
// const climbStairs = function(n) {
//   const helper = function(current, n) {
//     if (current > n) {
//       return 0;
//     }
//     if (current === n) {
//       return 1;
//     }
//     return helper(current + 1, n) + helper(current + 2, n);
//   }
  
//   return helper(0, n);
// };

//memoization O(n)
// const climbStairs = function(n, memo={}) {
//     if (n in memo) {
//         return memo[n];
//     }
//     if (n <= 2) {
//         return n;
//     }
//     memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
//     return memo[n];
// };
