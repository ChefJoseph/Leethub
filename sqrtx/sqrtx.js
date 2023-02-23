/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x; // 1) Base case 1 or 0
    let left = 0, right = Math.floor(x/2) + 1; // 2) Set search range to half
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2); //3) Set midpt
        //compute sq of mid ===, <, else >
        if (mid * mid === x) return mid; // A) Found EXACT ROOT
        else if (mid * mid < x) left = mid + 1; // Search in right half
        else right = mid; // Search in left half
      }
    return right - 1; // Return floor of square root   
};