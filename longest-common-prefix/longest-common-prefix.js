/**
 * @param {string[]} strs
 * @return {string}
 */
//b-s
//asign variable to strings
//iterate through 2 strings and find common prefix
//find common prefix with 3rd
//return lowest common prefix

var longestCommonPrefix = function(strs) {
//if strs is empty then return ""
//not necessary because of constraints 1 <= strs.length <= 200
    // if(!strs.length) {
    //         return "";
    //     }
//iterate over first string
//iterate and compare over second and third string (j=1, j=2)
//if common across all strings, then add to commonString array
//return commonString when uncommon character occurs
    commonString = ""
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return commonString;
            }
             // console.log(i,j,strs[0][i],strs[j][i],commonString, "each step")
        }
        commonString += strs[0][i];
        // console.log(i,commonString, "total loop")
    }
    return commonString;
    
};