let selectionSort = function(nums) {
    let min_index;
    for(let i= 0; i< nums.length; i++) {
        min_index = i;
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
    for( let i=0; i < nums.length; i++) {
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
}