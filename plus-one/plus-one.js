/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {   
//     //brute force:    
//         let joined = BigInt(digits.join(""));
//         joined++;
//         let solution = joined.toString().split("");
//         return solution;
    
// }

function plusOne(digits) {
    //init carry to incr by 1
    let carry = 1;
    //iter starting with last digit until index of 0
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        //Incr 1
        let sum = digit + carry;
        //If digit not adding 10, then carrying 0
        carry = Math.floor(sum / 10);
        //if under 10, leave as is, if >=10, then leave the single digit.
        digits[i] = sum % 10;
        // not carrying, break. The incr 1 is complete
        // or else carry = 1 continues in loop
        if (carry === 0) {
          break;
        }
    }
    //in the case of digits = [0,0,0], add 1 to beginning
    if (carry === 1) {
        digits.unshift(1);
    }
    return digits;
}
