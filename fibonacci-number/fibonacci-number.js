/**
 * @param {number} n
 * @return {number}
 */
// The time complexity of both regular recursion and memoization approaches to calculate the Fibonacci sequence is O(2^n), where n is the index of the Fibonacci number being calculated. This is because each recursive call results in two additional recursive calls, leading to an exponential increase in the number of function calls as the index increases.

// However, the space complexity of the memoization approach is better than that of the regular recursion approach. In memoization, we store the previously calculated values in a lookup table to avoid redundant calculations, so the space complexity becomes O(n). In contrast, the space complexity of regular recursion is O(n) as well, but with a much larger constant factor, since each recursive call creates a new stack frame with its own set of local variables and function arguments.

//recursion
// function fib(n) {
//   if (n === 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// memoization
function fib(n, memo={}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}