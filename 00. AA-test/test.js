let nums = [5, 2, 8, 4, 1];
let correct = [1, 2, 4 , 5, 8]
const answer = bubbleSort(nums)
console.log("Answer:", answer)
const isCorrect = JSON.stringify(answer) === JSON.stringify(correct);
console.log("Is the answer correct?", isCorrect);