// There are n stairs, a person standing at the bottom wants to climb stairs to reach the nth stair. 
// The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.


const climbStairs = (n) => {
  if (n <= 1) {
    return n;
  }

  let firstStep = 1;
  let secondStep = 1;
  let currentStep = 0;
  for (let i=2; i<=n; i++) {
    currentStep = firstStep + secondStep;
    firstStep = secondStep;
    secondStep = currentStep;
  }

  return currentStep;
}

const nthStep = 5
console.log(climbStairs(nthStep))
