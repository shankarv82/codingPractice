const numberPartitions = n => {
    let resultsObject = {};
    let resultsSortedObject = {};

    // Generate all partitions starting from 1 till n and bactrak with distance  
    for (let x = 1; x <= n; x++) {
        if (!resultsObject[x]) {
            let item = [x];
            resultsObject[x] = [item];
            let key = item.join("");
            resultsSortedObject[key] = 1;
        }

        let loop = x;
        for (let loop = 1; loop <= x; loop++) {
            let addLower = x - loop;
            if (addLower) {
                let lowerList = resultsObject[addLower];

                for (let item of lowerList) {
                    let newItem = [...item, loop].sort((a, b) => a - b);
                    let key = newItem.join("");
                    if (!resultsSortedObject[key]) {
                        resultsObject[x].push(newItem);  
                    }
                }
            }
        }
    }

    return resultsObject[n];
}

console.log(numberPartitions(3));

// [[3], [1, 2], [1, 1, 1], [1, 2]]
