/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//https://www.youtube.com/watch?v=NNkSsmZYU7s&list=PLrClazTqVpJmJOUmYf6wvP1m-ay1y7ui2&index=13&ab_channel=AndyGala

// 1)reverse order
// if k=3, then take k-1
// 2)then reverse subarrays
// [7,6,5,  4,3,2,1]
//   <-k-1  k->

// T O(3n)= O(n), S O(1) not creating extra space

//helper function, reverse subarray
function reverseNum (nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
}
function rotate (nums, k) {
    //1) modulus k, if k > num.length => undefined
    //modulus returns a k to start within the nums length.
    //ex. if k=12, new k = 5
    k = k % nums.length 
    let n = nums.length -1
    // 2) call helper function
    reverseNum(nums, 0, n) //flips all
    reverseNum(nums, 0, k-1); //flips first section (k-1)
    reverseNum(nums, k, n); //flips last section (k through n)
}

nums = [1,2,3,4,5,6,7];
k= 12;
rotate(nums,k)
console.log(nums)
