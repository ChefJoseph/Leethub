/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Set
// T O(n), S O(n)
// var containsDuplicate = function(nums) {
// //Set creates a new array with only unique values from nums
//     let found = new Set(nums);
// //if new array size is not equal to nums length then there are repeat numbers
//     return found.size !== nums.length;
// };

//https://github.com/codemonkeysio/LeetCode/blob/master/06-contains-duplicate/notes.md
//hashtable
// T O(n) worst case, S O(n)
var containsDuplicate = function (nums) {
    //init empty obj
    const obj = {}; 
    //When a duplicate is found in obj return true, or else add nums[i] to obj if it does not exist obj[nums[i]] = true;
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
         return true;
        }
    // If not found in obj, setting to true creates property with key as current number, value = true. obj[1]= true => {1:true}
    obj[nums[i]] = true;
    }
  return false;
};

// nums = [1, 2, 3, 1];
// console.log(containsDuplicate(nums));