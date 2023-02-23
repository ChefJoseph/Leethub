/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // If the left half is sorted
    if (nums[left] <= nums[mid]) {
    //if target is between L and mid, put right in first half
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
    //else put left in second half
      } else {
        left = mid + 1;
      }
    } else { // The right half must be sorted
    //if target is between mid and right, put L on secon half
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
    //else put right in first half
        right = mid - 1;
      }
    }
  }

  return -1; // Target not found
    
    
//scratch work
    // // const sortNum = nums.sort()
    // //k = find index where nums and sortNum have same value
    // // for(let i=0, i< nums.length -1, i++){
    // //     if nums[i] === sortNum[
    // // }
    // if(target < nums[k]) {
    //     const left = 0
    //     const right = k
    //     while( left <= right) {
    //         const mid = Math.floor((left+right) / 2);
    //         if(nums[mid] === target) {
    //             return mid
    //         } else if (nums[mid] > target ) {
    //             right = mid - 1
    //         } else {
    //             left = mid + 1
    //         }
    //     }
    // } else {
    //     const left = k + 1
    //     const right = nums.length  - 1
    //     while( left <= right) {
    //         const mid = Math.floor((left+right) / 2);
    //         if(nums[mid] === target) {
    //             return mid
    //         } else if (nums[mid] > target ) {
    //             right = mid - 1
    //         } else {
    //             left = mid + 1
    //         }
    //     }
    // }
    // return -1
};