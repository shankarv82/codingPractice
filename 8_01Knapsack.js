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
