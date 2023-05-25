/**
 * @param {number[]} nums
 * @return {number}
 */

//You must implement a solution with a linear runtime O(n) complexity and use only constant extra space O(1).
//https://www.youtube.com/watch?v=K6TuMWpnmqQ&list=PLGR7Axzvu1uyNyc9nHQSGmJeaCz_07lcd&index=1&ab_channel=CodeMonkeys

// T O(n) S O(1)

function singleNumber(nums) {
    //init single var to store the unique value
        let single = 0;
    //
    for (let num of nums) {
        single ^= num;
    }
  
    return single;
}


// T O(n), S O(n)
//hash table
//1) iterate over array to find the element that appears only once
//2)hash table: need to keep track of how many times a value has appeared/
// hash table : k-v pairs
//3)The key can be used to represent the element in array and the value can be set to true if the elment has only appeared once
//can remove k-p value from object if it has appeared more than once.
//4)Return key of object = element in array that has appeared only once.

// var singleNumber = function(nums) {
//     const hash = {}; //set to empty object
    
//     for (let i = 0; i < nums.length; i++) {
//     //if this particular nums[i] a key in object,
//     //delete it from object
//      if (hash[nums[i]]) {
//       delete hash[nums[i]];
         
//     } else { //else if it only appears once then set value to true
//       hash[nums[i]] = true;
//     }
//   }
//   return Object.keys(hash)[0];
//     //returns array of Object, and only first key
// };

nums = [4,2,2];
//first iteration 4 is set to true
//second iteration 2 is set to true
//third iteration 2 is present in hash so delete
//end loop and return 4
console.log(singleNumber(nums));