/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

//memoization
// function fib(n, memo={}) {
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n <= 1) {
//     return n;
//   }
//   memo[n] = fib(n-1, memo) + fib(n-2, memo);
//   return memo[n];
// }