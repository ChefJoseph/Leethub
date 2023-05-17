Insertion sort-
-In insertion sort, larger values are shifted to the right, creating space for the insertion of smaller values in their proper sorted order to the left.
-Keeps swapping in reverse order from current/i until it is in right place.  

T=O(n^2), S=O(1)
-Advantages= 1) stable sort, never swap with an equal element in list. 
2) On most sorted arrays if the n is small compared to size of array, it is quite fast. 
3) Best choice on small arrays. 

//practice
  let insertionSort = function(arr) {
    //start with 2nd element
    for (let i = 1; i < arr.length; i++) {
    //store current elem
      let current = arr[i];
    //compare with previous elem
      let j = i - 1;
    //while j is positive and greater than current, swap and move down
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      //once correct position is found for current, then we insert into sorted subarray
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Example usage:
  let arr = [5, 2, 8, 4, 1];
  let sortedArr = insertionSort(arr);
  console.log(sortedArr); // Output: [1, 2, 4, 5, 8]
  
  //example
         0  1  2  3
  arr = [5, 2, 1, 3]

  i = 1
  current = 2
  j = 1 - 1 = 0
  while j = 0, arr[j] > current, 5> 2
    arr[0+1] = arr[0] =5
    [5,5,1,3]
    j = -1
    arr[-1+1] = arr[0] = 2
    [2,5,1,3]
    //if left number is greater than current number, swap
  
  
  i= 2
  arr = [2, 5, 1, 3] // Original array
  arr = [2, 5, 5, 3] // Move 5 to the right
  arr = [2, 2, 5, 3] // Move 2 to the right
  arr = [1, 2, 5, 3] // Insert key (1) at j+1 position
  

  i = 3
  arr = [1, 2, 5, 3] // Original array
  arr = [1, 2, 5, 5] // Move 5 to the right
  arr = [1, 2, 3, 5] // Insert key (3) at j+1 position
  


function insertSort(nums) {
  let n = nums.length;
  for( let i = 1; i< n; i++){
    let current = nums[i];
    let j = i - 1;
    while(j>=0 && nums[j]>current){
      nums[j+1] = nums[j];
      j--;
    }
    nums[j+1] = current;
  }
  return nums;
}
