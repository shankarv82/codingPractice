const stringCompression = str => {
  if (str.length === 0) {
    console.log('Please enter valid string.');
    return;
  }
  
  let output = '';
  let count = 0;
  let strLength = str.length;
  
  for (let i = 0; i < strLength; i++) {
    count++;
    if (str[i] !== str[i+1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  return output;
}

console.log(stringCompression('')); //Please enter valid string.
console.log(stringCompression('aaaa')); //a4
console.log(stringCompression('aaaabbc')); //a4b2c1
console.log(stringCompression('aaaabbcaabb')); //a4b2c1a2b2
