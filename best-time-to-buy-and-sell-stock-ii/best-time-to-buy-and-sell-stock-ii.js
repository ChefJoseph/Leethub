/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
//init prices
    let profit = 0;
//iterate throught prices array
    
//if it is profitable, then add to profit
//because the stock can be bought and sold same day,
//the current day and previous day is profit is recorded
    for(let i = 0; i < prices.length; i++){
        if(prices[i] - prices[i-1] > 0){
            profit += prices[i] - prices[i-1]
        }
    }
    return profit
}