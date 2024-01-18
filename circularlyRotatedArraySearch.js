const circularlyArraySearch = (arr, num) => {
	let low = 0;
  let len = arr.length;
  let high = len - 1;
  
  while(low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    
    if (num === arr[mid]) {
    	return mid;
    } else  if (arr[mid] <= arr[high]) {
    	if (num > arr[mid] && num <= arr[high]) {
      	low = mid + 1;
      } else {
      	high = mid - 1; 
      }
    } else if (arr[mid] >= arr[low]){
      if (num >= arr[low] && num <= arr[mid]) {
      	high = mid - 1; 
      } else {
      	low = mid + 1;
      } 	
    }
  }
  return -1;
}

console.log(circularlyArraySearch([6,7,8,9,2,3,4,5], 10));
