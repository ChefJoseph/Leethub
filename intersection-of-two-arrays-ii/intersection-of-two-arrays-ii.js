/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// T O(m+n) iter over both arrays, SO(n) has to create new array
// Q: What if nums1's size is small compared to nums2's size? Which algorithm is better?
//Iterate over nums1 and check if exists in nums2

function intersect(nums1, nums2) {
    //store numbers from nums1 and freq count
    const map = new Map();
    //store common elements bw nums1 and nums2
    const result = [];
    
    //if it exists, get count and incr
    //if doesnt exist, add to map freq count of 1
    // map = [1=>2, 2=>2] for nums1=[1,2,2,1]
    for (const num of nums1) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    //if map has num of num2 && a positive count(or else it might count negatives),
        //push that num to result
        //decr count in map
    for (const num of nums2) {
        if (map.has(num) && map.get(num) > 0) {
            result.push(num);
            map.set(num, map.get(num) - 1);
        }
    }
    return result;
};



// What if the given array is already sorted? How would you optimize your algorithm?
//T O(m+n), S O(min(m,n))
//Two Pointer (ONLY IF SORTED)
// var intersect = function(nums1, nums2) {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] === nums2[j]) {
//             result.push(nums1[i]);
//             i++;
//             j++;
//         } else if (nums1[i] < nums2[j]) {
//             i++;
//         } else {
//             j++;
//         }
//     }

//     return result;
// };

// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
// function intersect(nums1, nums2) {
//   // Sort nums2 using an external sorting algorithm
//   externalSort(nums2);

//   const result = [];

//   // Open a stream to read nums2 from disk
//   const nums2Stream = openStream("nums2_sorted.txt");

//   // Read elements from nums1 one by one
//   for (let i = 0; i < nums1.length; i++) {
//     const num1 = nums1[i];

//     // Read elements from nums2 stream until a match is found or stream ends
//     let num2 = readLine(nums2Stream);
//     while (num2 && Number(num2) < num1) {
//       num2 = readLine(nums2Stream);
//     }

//     // Check if num1 and num2 are equal
//     if (num2 && Number(num2) === num1) {
//       result.push(num1);
//     }
//   }

//   // Close the nums2 stream
//   closeStream(nums2Stream);

//   return result;
// }

// // External sorting algorithm implementation
// function externalSort(nums) {
//   // Implementation of external sorting algorithm
//   // Sort the elements in nums and store the sorted result on disk
//   // You can use any external sorting algorithm of your choice
// }

// // Open a stream to read from disk
// function openStream(filename) {
//   // Implementation to open a stream to read from the given file on disk
// }

// // Read a line from the stream
// function readLine(stream) {
//   // Implementation to read a line from the given stream
// }

// // Close the stream
// function closeStream(stream) {
//   // Implementation to close the given stream
// }

