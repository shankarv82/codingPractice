const minCoins2 = (coins, amount) => {
    if (amount <= 0) {
        return 0;
    }

    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let a=1; a<=amount; a++) {
        for (let coin of coins) {
            if(a-c >= 0) {
                dp[a] = Math.min(dp[a], 1 + dp[a-c])
            }
        }
    }

    return dp[amount] === amount + 1 ? return -1 : return dp[amount];
}


const minCoins = (coins, V) => {
    let m = coins.length;
    let table = [0];

    for (let i = 1; i <= V; i++) {
        table[i] = Number.MAX_VALUE;

        for (let j = 0; j < m; j++) {
            if (coins[j] <= i) {
                let sub_res = table[i - coins[j]];
                if (sub_res != Number.MAX_VALUE && sub_res + 1 < table[i])
                    table[i] = sub_res + 1;
            }
        }
    }

    if (table[V] == Number.MAX_VALUE) 
      return -1;

    return table[V];
};

console.log(minCoins([9, 6, 5, 1], 11));
