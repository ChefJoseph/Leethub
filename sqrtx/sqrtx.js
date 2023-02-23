/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x; // Base case
    let left = 0, right = Math.floor(x/2) + 1; // Set search range
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid === x) return mid; // Found exact root
        else if (mid * mid < x) left = mid + 1; // Search in right half
        else right = mid; // Search in left half
      }
    return right - 1; // Return floor of square root   
};