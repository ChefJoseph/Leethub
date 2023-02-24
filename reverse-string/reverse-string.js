/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

///recursively, S&T: O(n)
function reverseString(s) {
  helper(0, s.length - 1, s);
  return s;
}

function helper(left, right, s) {
  if (left >= right) {
    return;
  }
  let temp = s[left];
  s[left] = s[right];
  s[right] = temp;
  helper(left + 1, right - 1, s);
}

// T O(n/2) = O(n)
// S O(1)
// solution 1: in-place string reversal
// var reverseString = function(s) {
//     let n = s.length - 1
//     for(let i= 0; i< n/2; i++) {
//         let temp = s[i];
//         s[i] = s[n-i];
//         s[n-i] = temp;
//     }
// };

// solution 2- two-pointer
// const reverseString = function(s) {
//     let left = 0;
//     let right = s.length - 1;
//     while (left < right) {
//         let temp = s[left];
//         s[left] = s[right];
//         s[right] = temp;
//         left++;
//         right--;
//     }
//     return s;
// };