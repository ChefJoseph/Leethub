quick sort- mroe effic small data sets, good when in-place sorting and not sorted beforehand
when time is important

Sorting an array of integers
Finding the kth smallest/largest element in an unsorted array
Checking if two arrays are equal or not after sorting them
Rearranging an array of integers in such a way that all the even integers come before all the odd integers
Sorting a linked list of integers

Quick sort is another divide and conquer algorithm that selects an element called the pivot and partitions the array around the pivot, such that all elements smaller than the pivot come before it, and all elements larger than the pivot come after it. It then recursively sorts the two partitions. 

It has a worst-case time complexity of O(n^2), but an average-case time complexity of O(n log n).
The worst case occurs when the pivot selected is either the smallest or largest element in the array, which causes the partition to be unbalanced.
The space complexity of quicksort is O(log n) in the best and average cases, as the recursion depth is log n. In the worst case, the space complexity is O(n) due to the unbalanced partition.


function quickSort(arr, left, right) {
    if (left < right) {
      let pivot = partition(arr, left, right);
      quickSort(arr, left, pivot - 1);
      quickSort(arr, pivot + 1, right);
    }
    return arr;
  }
  
function partition(arr, left, right) {
    let pivotValue = arr[right];
    let pivotIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    return pivotIndex;
}

// Example usage:
let arr = [5, 2, 8, 4, 1];
let sortedArr = quickSort(arr, 0, arr.length - 1);
console.log(sortedArr); // Output: [1, 2, 4, 5, 8]
