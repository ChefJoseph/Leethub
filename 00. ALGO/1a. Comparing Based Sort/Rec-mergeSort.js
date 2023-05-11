merge sort - more effic large data sets
Stable, arrays or linked-lists

The time complexity of merge sort is O(n log n), as the array is divided into halves recursively, and each level of recursion has a time complexity of O(n). 
The space complexity of merge sort is O(n), as it creates a new array to merge the sorted halves.


function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  }
  
function merge(left, right) {
    const result = []; //new array created
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
        } else {
        result.push(right[rightIndex]);
        rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
