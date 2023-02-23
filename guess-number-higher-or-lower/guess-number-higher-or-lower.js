/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

//keep halving until guess is mid, API picks and reveals if mid >=< than pick with -1,0,1

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); //find mid
        const guessResult = guess(mid); //shows if mid <=>, turns answer into -1,0,1

        if (guessResult === 0) { //if mid = guess correct
          return mid;
        } else if (guessResult === 1) { //if mid less than guess, move L to latter half
          left = mid + 1;
        } else {
          right = mid - 1; //else move right to first half
        }
      }
};