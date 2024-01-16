// Space optimization method
function knapSack(weights, profits, Wt) { 
    // Making and initializing dp array - 0 to Wt
    const dp = Array(Wt + 1).fill(0); 

    // Loop through all the profits - we need to maximize the profit
    for (i = 0; i < profits.length; i++) { 
        // Loop through all the weights. If Wt is 6 will run the loop from 6 till 1
        for (w = Wt; w > 0; w--) { 
            // consider wights[i] when if it is less than weight
            if (weights[i] <= w) {  
                // Finding the maximum profit between including the weight and exluding the weight
                // including the weight - dp[w] 
                // exluding the weight is dp[w - weights[i]] 
                dp[w] = Math.max(dp[w], dp[w - weights[i]] + profits[i]); 
            }
        } 
    } 
      
    // Returning the maximum value of knapsack 
    return dp[Wt]; 
} 
  
// Driver code 
const profits = [ 60, 100, 120 ]; 
const weights = [ 10, 20, 30 ]; 
const Wt = 50;  
console.log(knapSack(weights, profits, Wt)); 

// Time complexity: O(n2)
// Space complexity: O(n)

// Tabulation method
const solveKnapsack = (profits, weights, capacity) => {
    if (
        capacity <= 0 ||
        !profits.length ||
        weights.length != profits.length
    ) {
        return 0;
    }

    const n = profits.length;
    const dp = new Array(n).fill(0).map(() => new Array(capacity).fill(0));

    // if we have only one weight, we will take it if it is not more than the capacity
    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) {
            dp[0][c] = profits[0];
        }
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = 1; c <= capacity; c++) {
            let profit1 = 0;
            let profit2 = 0;
            // include the item, if it is not more than the capacity
            if (weights[i] <= c) {
                profit1 = profits[i] + dp[i - 1][c - weights[i]];
            }

            // exclude the item
            profit2 = dp[i - 1][c];
            dp[i][c] = Math.max(profit1, profit2);
        }
    }

    return dp[n - 1][capacity];
};

console.log(solveKnapsack([1, 6, 10, 16], [1, 2, 3, 5], 7));
