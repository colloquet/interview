function findGreatestConsecutiveSum(arr) {
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }

  return maxSum;
}

console.log(findGreatestConsecutiveSum([1, -3, 3, 4, 5, -3]));
console.log(findGreatestConsecutiveSum([-1, -2, -3, -4, -9, -8]));
