/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {   
//     //brute force:    
//         let joined = BigInt(digits.join(""));
//         joined++;
//         let solution = joined.toString().split("");
//         return solution;
    
// }

//iterate from right to left
    for (let i = digits.length - 1; i>= 0; i--) {
//no carrying 
        if (digits[i] < 9) {
            digits[i]++;
            return digits; //ends loop
            
        } else {
            digits[i] = 0;
        }
    }
//if digits are zeros add 1 to front
    digits.unshift(1);
    return digits;
};