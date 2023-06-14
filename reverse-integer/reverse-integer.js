/**
 * @param {number} x
 * @return {number}
 */

function reverse(x) {
    let reversed = 0;
    const limit = Math.pow(2, 31);
      while (x !== 0) {
        const digit = x % 10;

        // Check if reversing x would cause it to go outside the 32-bit range
        if (reversed > Math.floor(limit / 10) || (reversed === Math.floor(limit / 10) && digit > 7)) {
            return 0;
        }
        if (reversed < Math.ceil(-limit / 10) || (reversed === Math.ceil(-limit / 10) && digit < -8)) {
            return 0;
        }
        reversed = reversed * 10 + digit;
        x = Math.trunc(x / 10);
      }

  return reversed;
}
