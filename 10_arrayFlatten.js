// Flattening an array. Ex: Input : [[1, 2, 3], 4, [5, [6, 7]] Output: [1, 2, 3, 4, 5, 6, 7].

const flatten = arr => {
  return arr.reduce((acc, current) => {
    return acc.concat(Array.isArray(current) ? flatten(current) : current);
  }, []);
}



console.log(flatten([[1, 2, 3], 4, [5, [6, 7]]])); 

// Output
// [1, 2, 3, 4, 5, 6, 7]
