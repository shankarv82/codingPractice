const arraySpiralOrder = arr => {
	const rows = arr.length;
	const cols = arr[0].length;
	let t = 0;
  let b = rows - 1;
  let l = 0;
  let r = cols - 1;
  let d = 0;
  
  while(t <= b && l <= r) {
  	if (d % 4 === 0) {
    	for (i=l; i<=r; i++) {
      	console.log(arr[t][i])
      }
    	t++;
    	d++;
    } else if (d % 4 === 1) {
      for (i=t; i<=b; i++) {
      	console.log(arr[i][r])
      }
      r--;
      d++;
    } else if (d % 4 === 2) {
    	for (i=r; i>=l; i--) {
      	console.log(arr[b][i])
      }
      b--;
      d++;
    } else if (d % 4 === 3) {
    	for (i=b; i>=t; i--) {
      	console.log(arr[i][l])
      }
      l++;
    	d++;
    }
  }
}

const arr = [
	[1,2,3,4],
  [4,3,2,1],
  [1,2,3,4],
  [4,3,2,1],
];

console.log(arraySpiralOrder(arr));
