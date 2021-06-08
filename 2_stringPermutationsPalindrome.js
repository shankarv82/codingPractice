const reverse = str => {
  if (str === "") {
    return ""; 
  } 
  return reverseString(str.substr(1)) + str.charAt(0);
}

const checkPalindrom = str => {
    return str === reverse(str);
}

const getAllPermutations = string => {
  const results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i];
    const charsLeft = string.substring(0, i) + string.substring(i + 1);
    const innerPermutations = getAllPermutations(charsLeft);
    for (let j = 0; j < innerPermutations.length; j++) {
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

const permutaions = getAllPermutations('abc');

for(let str  of permutaions) {
  console.log(`Is ${str} Palindrome? `, checkPalindrom(str));
}
