const circularlyRotatedArray = arr => {
  const len = arr.length;
	let low = 0;
  let high = len - 1;
  
  while(low <= high) {
  	if (arr[low] < arr[high]) {
    	return low;
    }
    let mid = Math.floor(low + (high - low) / 2);
    let prev = (mid - 1 + len) % len;
    let next = (mid + 1) % len;
    
    if (arr[prev] >= arr[mid] && arr[next] >= arr[mid]) {
    	return mid;
    } else  if (arr[mid] <= arr[high]) {
    	high = mid - 1;
    } else {
    	low = mid + 1;
    }
  }
  return -1;
}

console.log(circularlyRotatedArray([6,7,8,9,2,3,4,5]));
