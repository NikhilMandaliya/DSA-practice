/* Promblem:
Given an array of integers, find the maximum possible sum obtained by summing exactly K elements from the array. The elements must be contiguous in the original array.
Example:
maxSubarraySum([1, 2, 3, 4, 5], 2); // 9 (4 + 5)
maxSubarraySum([1, 2, 3, 4, 5], 3); // 12 (3 + 4 + 5)
maxSubarraySum([2, 12, 4, 7, 2, 9], 3); // 23 (12 + 4 + 7)
*/

function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let maxSum = 0;
  let tempSum = 0;

  // Calculate the sum of the first K elements
  for (let i = 0; i < k; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;

  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5], 2)); // 9 (4 + 5)
console.log(maxSubarraySum([1, 2, 3, 4, 5], 3)); // 12 (3 + 4 + 5)
console.log(maxSubarraySum([1, 2, 3, 4, 5], 4)); // 14 (2 + 3 + 4 + 5)
console.log(maxSubarraySum([2, 12, 4, 7, 2, 9], 3)); // 23 (12 + 4 + 7)

// function maxSubarraySum(arr, k) {
//   if (arr.length < k) return null;

//   let maxSum = -Infinity;
//   let tempSum = 0;
//   for (let i = 0; i <= arr.length - k; i++) {
//     for (let j = 0; j < k; j++) {
//       tempSum += arr[i + j];
//     }
//     if (tempSum > maxSum) {
//       maxSum = tempSum;
//     }
//     tempSum = 0;
//   }
//   return maxSum;
// }
