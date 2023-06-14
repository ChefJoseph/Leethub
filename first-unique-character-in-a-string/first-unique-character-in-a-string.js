/**
 * @param {string} s
 * @return {number}
 */
// Time complexity:
// O(n) linear search

// Space complexity:
// O(n) using obj or hash table

function firstUniqChar(s) {
// 1)

    let hash = {};
    let n = s.length
//Iterate through String s and store key-value pair in hash table
    for (let i = 0; i < n; i++) {
//Store all characters inside obj/hash table:
//If character is not in hash, save in hash
//Increment the value by 1 for each character
        hash[s[i]] = (hash[s[i]] || 0 ) + 1;
        // if (!hash[s[i]]) {
        //     hash[s[i]] = 0;
        // };
        // hash[s[i]]++;
    };
//if character in hash has value of 1 it returns first key index of i
    for (let i = 0; i < n; i++) {
        if (hash[s[i]] === 1) {
            return i; 
        };
    };
//if no unique characters exist then return -1
    return -1;
};