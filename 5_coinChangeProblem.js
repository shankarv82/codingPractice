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
