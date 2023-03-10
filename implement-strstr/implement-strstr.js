/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//brain-storm
//1) iterate through both strings and find where consecutive strings match
//2) return index where occurs or return 0.

// var strStr = function(haystack, needle) {
//     if(!needle) return 0;
//     // if(!haystack) return -1;
// //if haystack is shorter than needle, return -1
//     if(haystack.length<needle.length) return -1;
// //initialize i for haystack and j for needle
//     let i=0;
//     let j=0;   
//     while(i<haystack.length && j<needle.length){
// //if characters are the same, move to next character   
// //else, start search over, increment i and reset j to 0
//         if (haystack[i]===needle[j]){
//             ++i;
//             ++j;
//         } else {
//             i = (++i)-j
//             j = 0;
//         }
//         // console.log(i,j, haystack[i], needle[j])
//     }
// //when j is equal to length of needle, return the difference of i and j...
// //...to show index of first occurence
//     if(j===needle.length) {
//         return i-j;
//     }
//     return -1;
// };

var strStr = function(haystack, needle) {
  let needleLen = needle.length
  let haystackLen = haystack.length
//if needle is empty then return 0
  // if(needle === ''){
  //   return 0
  // }
//iterate through haystack
//if substring is equal to needle string then return index
//else return -1
  for(let i=0; i < haystackLen; i++){
    if (haystack.substring(i, i + needleLen) === needle){
      return i
    }
      // console.log(i, haystack.substr(i, needleLen))
  }
  return -1
}