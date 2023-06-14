/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //turn integer into string
    //divide string into substrings
    //reverse string
    //combines substrings into one new string
    var toStr = x.toString().split("").reverse().join("");
    
    // console.log(toStr, "toStr")
    // console.log(toStr.split(""), "split")
    //parses string into integer
    //2,147,483,647 is 32-bit unsigned integer
        if (parseInt(toStr) > 2147483647) return 0;
    //if last character is -, use as seprator
    //contact '-' and first substring 
    //parse string into integer
        if (toStr.substring(toStr.length - 1) === '-') {
            const newStr = toStr.split('-');
            // console.log(newStr, "newStr")
            const negStr = '-' + newStr[0];
            return parseInt(negStr);
        }

    return parseInt(toStr);
}

