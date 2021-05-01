const validAnagram = (first, second) => {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let letter of first) {
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
  
    for (let letter of second) {
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
}

console.log(validAnagram("aaz", "azz"));
