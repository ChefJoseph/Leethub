heap sort  - when space efficiency is important but takes longer
array or linked-list
kth- largest/smallest element in list.

The key idea for in-place heap sort involves a balance of two central ideas:
(a) Building a heap from an unsorted array through a “bottom-up heapification” process, and 
(b) Using the heap to sort the input array.

Time O(n log n): building a heap O(n), and extracting elements n times x heap is height log n.
Space O(1) performed in place

Quick sort more efficient for small data sets
Merge sort more effic for large data sets

//practice
  function heapSort(array) {
        //Build max heap
        // Start from the middle of the array (the parent of the last element)
        const heapSize = array.length; 
        for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            maxHeapify(array, i, heapSize);
        }
    
        // Extract the maximum element from the heap and place it at the end of the array
        for (let i = array.length - 1; i > 0; i--) {
        swap(array, 0, i);
        maxHeapify(array, 0, i);
        }
    
        return array;
    }

  function maxHeapify(array, i, heapSize) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
  
    // Find the largest element between the parent, left child, and right child
    if (left < heapSize && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < heapSize && array[right] > array[largest]) {
      largest = right;
    }
  
    // If the largest element is not the parent, swap it with the parent and continue heapifying
    if (largest !== i) {
      swap(array, i, largest);
      maxHeapify(array, largest, heapSize);
    }
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  