// Solution 1
const coinChange = (coins, amount) => {
  const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
  dp[0] = 0; // To make 0, we need 0 coins.
  for (let coin of coins) { // Check each coin
    for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
      dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
};


console.log(coinChange([1,2,5],11));
// Output: 3

// Solution 2
const coinChangeProblem = (coins, amount) => {
    const coinsLength = coins.length;
    const ways = Array(amount + 1).fill(0);

    ways[0] = 1;

    //  0  1  2  3  4  5
    //  0  0  0  0  0  0

    //  1  1  1  1  1  1
    //  2  2  3  3
    //              4  4

    for (let i = 0; i < coinsLength; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            ways[j] = ways[j - coins[i]] + ways[j];
        }
    }

    return ways[amount];
};

console.log(coinChangeProblem([1, 2, 5], 5));
