Insertion sort-
Given a collection of integers, you can sort the list by proceeding from the start of the list, and every time you encounter an element that is out of order, you can continuously swap places with previous elements until it is inserted in its correct relative location based on what you’ve processed thus far. 
-Keeps swapping in reverse order until it is in right place.  T=O(n^2), S=O(1)
-Advantages= 1) stable sort, never swap with an equal element in list. 
2) On most sorted arrays if the n is small compared to size of array, it is quite fast. 
3) Best choice on small arrays. 

//practice
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  
  // Example usage:
  let arr = [5, 2, 8, 4, 1];
  let sortedArr = insertionSort(arr);
  console.log(sortedArr); // Output: [1, 2, 4, 5, 8]
  