/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//Note that you must do this in-place without making a copy of the array.
//1) JS methods: can filter out zero, shift numbers to beginning and throw 0 at end. 
//but may not work in interview

//2)two-pointer 
//T O(n), S O(1) not creating more space. just increasing i and lastNonZeroIndex

    //lastNonZeroIndex = 0
//0,1,0,3,12
//i=0? yes so move on
//0,1,0,3,12
//  i=0? no, set 1 to 0 index, then lastNonZeroIndex = 1
//1,1,0,3,12
//    i=0? yes so move on
//1,3,0,3,12
//      i=0? no, set 3 to 1 index, then lastNonZeroIndex = 2
//1,3,0,3,12
//         i=0? no, set 12 to 2 index, then lastNonZeroIndex = 3, out of loop
//1,3,12,3,12
//    at i=3(lastNonZeroIndex = 3) , replace with 0s

//two-pointer
//T O(n), S O(1) not creating more space. just increasing i and lastNonZeroIndex
    
var moveZeroes = function(nums) {
//init to establish position to insert non-zero values
    lastNonZeroIndex = 0
//iterate nums, if non-zero number, set value to lastNonZeroIndex index and increment
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0) {
            nums[lastNonZeroIndex] = nums[i];
            lastNonZeroIndex++;
        }
    } //once all non-zero numbers are in place, add zeroes starting at index of lastNonZeroIndex until the length of nums
    for(let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};