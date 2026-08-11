/* Problem:
Given an array of integers, determine if there are any two numbers that sum up to zero. If such a pair exists, return that pair. If no such pair exists, return null.
Given array will be sorted in ascending order.
Example:
findSumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
findSumZero([-2, 0, 1, 3]); // null
findSumZero([-2, -1, 0, 1, 3]); // [-1, 1]
*/

function findSumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

console.log(findSumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(findSumZero([-2, 0, 1, 3])); // null
console.log(findSumZero([-2, -1, 0, 1, 3])); // [-1, 1]
