// Flattening an array. Ex: Input : [[1, 2, 3], 4, [5, [6, 7]] Output: [1, 2, 3, 4, 5, 6, 7].

const flatten = arr => arr.reduce((acc, current) => acc.concat(Array.isArray(current) ? flatten(current) : current), []);

console.log(flatten([[1, 2, 3], 4, [5, [6, 7]]])); 

// Output
// [1, 2, 3, 4, 5, 6, 7]
