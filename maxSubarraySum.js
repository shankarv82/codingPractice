// Function to find the maximum contiguous subarray
function maxSubArraySum(a) {
	let maxSunm = 0;
	let tempSum = 0;
	
	for (let item of a){
		tempSum = tempSum + item;
		if (maxSum < tempSum) {
			maxSum = tempSum;
    }

		if (tempSum < 0) {
			tempSum = 0;
    }
	}
	return maxSum;
}

// Driver code
const a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
console.log("Maximum contiguous sum is", maxSubArraySum(a, a.length))

// Outout - Maximum contiguous sum is 7
