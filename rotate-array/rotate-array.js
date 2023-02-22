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

////helper function: take in nums arrays, a start, and end
// const revNums = (nums, start, end) => {
//     //while start < end, swap values and reverse it
//     //first iteration, [5,6,7    1,3,2,4] 5 and 7 flip , 1 and 4 flip
//     //second iteration, [5,6,7    1,2,3,4] //k-1 side breaks out of while becausle start = end, k side loops through one more time, 2 and 3 flip
//     while (start < end) {
//         [nums[start], nums[end]] = [nums[end], nums[start]];
//         start ++;
//         end --;
//     }
// }

// var rotate = function(nums, k) {
//     //first mod k,
//     //if k is larger than nums.length then it will keep cycling
//     k = k % nums.length
    
//     //Reverse nums in place
//     // nums.reverse(); O(1)
        
//     let n = nums.length-1;

//     for(let i=0; i<n/2; i++) {
//       let temp = nums[i];
//       nums[i] = nums[n-i];
//       nums[n-i] = temp;
//     }
//     //call helper function for each start/end
//     revNums(nums, 0, k - 1);  // start at 0 and go to k-1
//     revNums(nums, k, nums.length - 1); //start at k and go to end of nums
// };

//helper function, reverse subarray
const revNum = function(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start++;
        end--;
    }
}

const rotate = function(nums, k) {
    //1) modulus k, if k > num.length => undefined
    //modulus returns a k to start within the nums length.
    //ex. if k=12, new k = 5
    k = k % nums.length 

    //2) reverse nums
    let n = nums.length -1
    for(let i= 0; i< n/2; i++) {
        let temp = nums[i];
        nums[i] = nums[n-i];
        nums[n-i] = temp;
    }
    //3) call helper function
    revNum(nums, 0, k-1);
    revNum(nums, k, n);
}

nums = [1,2,3,4,5,6,7];
k= 12;
rotate(nums,k)
console.log(nums)