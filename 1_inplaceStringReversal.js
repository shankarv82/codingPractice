// Inplace String reversal
const inplaceStringReversal = string => {
  if (!string) {
    return ""
  };
  
  const stringArray = string.split("");
  let i = 0;
  let j = string.length - 1;
  
  while(i <= j) {
    let temp = stringArray[i];
    stringArray[i] = stringArray[j];
    stringArray[j] = temp;
    i++;
    j--;
  }
  
  return stringArray.join("");
}

console.log(inplaceStringReversal('shankar'));

// Reverse words in a given string
const reverseSentence = statement => {
  let removeMultipleSpaces = statement.replace(/ /g, " ");
  const words = removeMultipleSpaces.split(" ");
  for(let i=0; i<words.length; i++) {
    words[i] = inplaceStringReversal(words[i]);
  }
  return inplaceStringReversal(words.join(" "));
}

console.log(reverseSentence('shankar wrote this code'));
