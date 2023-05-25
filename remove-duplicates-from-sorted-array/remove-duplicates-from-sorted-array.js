/**
 * @param {number[]} nums
 * @return {number}
 */
//https://github.com/codemonkeysio/LeetCode/tree/master/05-remove-duplicates-from-sorted-array
//non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//no extra arrays or data structures
//in JS you can change length of array. not in other languages. In C you can only move to front.

//start at beginning of array and iterate through and rearrange
//can only modify nums in place

//time O(n) loops through once, space O(1), no extra space
function removeDuplicates(nums) {
//if no elements in array then return 0
    if ( nums.length === 0) {
        return 0;
    }
//start k at second position, index of 1, This will record how many unique numbers, and where the next unique number will be placed
    let k = 1;
//iterate through nums, if the element after i is not the same, then replace nums[k] with the next number. incr k for next unique num.
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
         nums[k] = nums[i + 1];
         k++;
        }
    }
//to remove duplicates, nums.length removes any elements beyond k(only unique elements). 
    nums.length = k;  
    return k;
};

nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums), ", nums =", nums);