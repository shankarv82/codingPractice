const getAllPermutations = (string) => {
    const results = [];

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        const charsLeft = string.substring(0, i) + string.substring(i + 1);
        const innerPermutations = getAllPermutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(char + innerPermutations[j]);
        }
    }
    return results;
}
