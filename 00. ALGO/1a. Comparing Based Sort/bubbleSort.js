// Bubble sort- swaps adjacent elements until the list is sorted.

// T= O(n^2) passes twice. S= O(1) no addl space req.
// Stable- since == equal elements will not have swapped. Slow and rarely used in practice.
// Can be faster than selection sort if already in order
// THE LARGEST UNSORTED ELEMENT 'BUBBLES' TO THE END AFTER EACH OUTER LOOP

// //practice
// // let bubbleSort = function(heights) {
// //     //sort array
// //     const ordered = [...heights];
// //     heights.sort((a,b) => a-b);
// //     //compare to new ordered array to original array. If diff then +1 to diff
// //     let diff = 0;
// //     for(let i=0; i<ordered.length; ++i) {
// //         ordered[i] !== heights[i] && ++ diff;
// //     }
// //     return diff;
// // }

//   let bubbleSort = function (arr) {
//     let n = arr.length;
//     // Outer loop that runs through the entire array n times
//     for (let i = 0; i < n -1 ; i++) {
//       // Inner loop that iterates through the unsorted part of the array
//       //j < n - i - 1 compares one less element after each inner loop because largest element bubbles to end
//       for (let j = 0; j < n - i - 1; j++) {
//         // If the current element is greater than the next element, swap them
//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     // Return the sorted array
//     return arr;
//   }
  
//   // Example usage
//   let arr = [5, 2, 8, 4, 1];
//   console.log(bubbleSort(arr)); // Output: [1, 2, 4, 5, 8]
  

//   //practice
//   let bubbleSort = function(nums) {
//     let n = nums.length;
//     for( let i = 0; i < n -1; i++) {
//         for(let j = 0; j < n - i - 1; j++) {
//             if(nums[j] > nums[j+1]) {
//                 let temp = nums[j];
//                 nums[j] = nums[j+1];
//                 nums[j+1] = temp;
//             }
//         }
//     }
//     return nums;
//   }

//   //practice
//   let bubbleSort = function(nums) {
//     let n = nums.length
//     for( let i = 0; i < n - 1; i++) {
//         for(let j = 0; j< n - i - 1; j++) {
//             if(nums[j] > nums[ j+1]){
//                 let temp = nums[j];
//                 nums[j] = nums[j+1];
//                 nums[j+1] = temp;
//             }
//         }
//     }
//   }

//   function bubbleSort(nums) {
//     const n = nums.length
//     for(let i = 0; i<n - 1; i++){
//       for(let j = 0; j<n-i-1; j++){
//         if(nums[j]>nums[j+1]){
//           let temp = nums[j]
//           nums[j] = nums[j+1]
//           nums[j+1] = temp
//         }
//       }
//     }
//     return nums
//   }

  function bubbleSort(nums) {
    const n = nums.length
    for( let i =0; i < n - 1; i++){
      for(let j = 0; j < n - i - 1; j++){
        if(nums[j] > nums[j+1]){
          let temp = nums[j];
          nums[j] = nums[j+1];
          nums[j+1] = temp;
        }
      }
    }
    return nums
  }

let nums = [5, 2, 8, 4, 1];
let correct = [1, 2, 4 , 5, 8]
const answer = bubbleSort(nums)
console.log("answer:", answer)
const isCorrect = JSON.stringify(answer) === JSON.stringify(correct);
console.log("Is the answer correct?", isCorrect);