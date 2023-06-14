/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solutions#1
// T O(n)
// S O(n)

//1)Sort O(nlogn)
//2)Check if length matches
//2)Check if letters match
// function isAnagram(s, t) {
//     //if not same length, return false
//     if (s.length !== t.length) {
//         return false;
//     }
//     //init hash object
//     const count = {};
//     // Count the frequency of characters in s
//     for (let i = 0; i < s.length; i++) {
//         count[s[i]] = (count[s[i]] || 0) + 1;
//     }
//     //Decremenet the frequency of t[i] in count
//     for (let i = 0; i < s.length; i++) {
//         if (!count[t[i]]){
//             return false;
//         }
//         count[t[i]]--;
//     }
//     // All char should be zero. 
//     for(const char in count) {
//         if(count[char] !== 0) {
//             return false;
//         }
//     }
//     return true;
// }

function isAnagram(s,t) {
    if(s.length !== t.length) {
        return false;
    }
    let count = {};
    for(let i = 0; i < s.length; i++){
        count[s[i]] = (count[s[i]] || 0) + 1;
    }
    for(let i = 0; i < s.length; i++){
        if(!count[t[i]]){
            return false;
        }
        count[t[i]]--;
    }
    for(let char in count){
        if(count[char] !== 0) {
            return false;
        }
    }
    return true;
}

// var isAnagram = function(s, t) {
// //turn each character into substring and sort alphabetically
//     let sSort = s.split("").sort();  
//     let tSort = t.split("").sort();
//     console.log({sSort,tSort})
//  //return false if both strings are not equal length   
//     if (sSort.length !== tSort.length) {
//         return false
//     }
// //iterate through strings and if characters do not match at each index, return false
//     for (let i = 0; i < s.length; i++) {
//         if(sSort[i] !== tSort[i]) {
//             return false
//         }
//     }
// //return true if they are equal length and have matching characters
//     return true
// };

