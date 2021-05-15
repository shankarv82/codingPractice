const cutRod = (prices, n) => {
    const val = [0];

    for (let i = 1; i <= n; i++) {
        let maximum = Number.MIN_VALUE;
        for (let j = 0; j < i; j++) {
            maximum = Math.max(maximum, prices[j] + val[i - j - 1]);
        }

        val[i] = maximum;
    }

    return val[n];
};

const arr = [1, 5, 8, 9, 10, 17, 17, 20];

console.log(cutRod(arr, 8));
