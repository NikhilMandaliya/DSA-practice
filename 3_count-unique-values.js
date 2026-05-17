/* Problem:
Write a function that takes an array of values and returns the number of unique values in the array. Array will be sorted and contains only numbers. 
Example:
countUniqueValues([1,1,1,1,1,2]); // 2
countUniqueValues([1,2,3,4,4,4,5]); // 5
countUniqueValues([]); // 0
*/

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 1;

  // Start with first 2 elements of the array
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      count++;
      i++;
    } else {
      i = j;
    }
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5])); // 5
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 3, 4, 4])); // 4
console.log(countUniqueValues([1, 1, 1, 1, 3, 4, 4])); // 3
