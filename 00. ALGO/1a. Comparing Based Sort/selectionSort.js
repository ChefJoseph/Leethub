Selection Sort
The inner loop j finds minimum index by comparing j < min_index. 
Then it swaps with current index of outer loop i.
It will keep swapping until the entire list is sorted.

	Slow. T =O(n^2). Have to search the entire array to find the minimum element. 
    S=O(1). No addtl space. All are in-place.
    Not stable

//practice
let selectionSort = function(nums) {
    let min_index;
    for(let i= 0; i< nums.length - 1; i++) {
        min_index = i;
        //find min_index
        for(let j= i+1; j<nums.length; j++) {
            if(nums[j] < nums[min_index]) {
                min_index = j;
            }
        }
        //swap
        let temp = nums[min_index];
        nums[min_index] = nums[i]
        nums[i] = temp;
    }
    return nums
}
/////////
nums = [5,2,6,1,3]
1) i= 0
min_index = 0
j=1
nums[1] < nums[0]
    min_index = 1
temp = nums[1] (2)
nums[1] = nums[0]
    nums[1] = 5
nums[0] = 2
2) [2,5,6,1,3]
i = 1
min_index = 1;
j = 2
temp = 5
nums[1] = nums [1]
nums[1] = 5
//no change
3) and so on

let selectionSort2 = function(nums) {
    let min_index
    for( let i=0; i < nums.length - 1; i++) {
        min_index = i;
        for( let j=i+1; j<nums.length; j++) {
            if(nums[j] < nums[min_index]) {
                min_index = j;
            }
        }
        let temp = nums[min_index];
        nums[min_index] = nums[i];
        nums[i] = temp;
    }
    return nums;
}

function selectionSort(nums){
    let min_index;
    let n= nums.length;
    for(let i=0; i<n - 1; i++){
        min_index = i;
        for(let j = 1; j < n; j++){
            if(nums[j] < nums[min_index]){
                min_index = j;
            }  
        }
        let temp = nums[min_index];
        nums[min_index]=nums[i];
        nums[i] = temp;
    }
    return nums;
}

function selectionSort(nums){
    let n = nums.length;
    let min_index;
    for( let i = 0; i < n -1; i++){
        min_index = i;
        for(let j = 1; j < n; j++){
            if(nums[j]< nums[min_index]){
                min_index = j;
            }
        }
        let temp = nums[min_index];
        nums[min_index] = nums[i];
        nums[i] = temp;
    }
    return nums;
}

function selectionSort(nums){
    let n = nums.length;
    for(let i = 0; i < n - 1; i++){
        let min_index = i;
        //inner loop to find min_index
        for( let j = 1; j < n; j++){
            if(nums[j] < nums[min_index]){
                min_index = j;
            }
        }
        //swap
        let temp = nums[min_index];
        nums[min_index] = nums[i];
        nums[i] = temp;
    }
    return nums;
}