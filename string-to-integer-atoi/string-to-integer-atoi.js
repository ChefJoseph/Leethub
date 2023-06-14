/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    let i = 0;
    let sign = 1;
    let result = 0;

    // Ignore leading whitespace
    while (s[i] === ' ') {
        i++;
    }

    // Check for optional sign
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // Read digits until a non-digit character is encountered
    while (i < s.length && isDigit(s[i])) {
        const digit = parseInt(s[i]);
        // Check for overflow
        if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > (INT_MAX % 10))) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};

// Helper function to check if a character is a digit
function isDigit(char) {
    return char >= '0' && char <= '9';
}
