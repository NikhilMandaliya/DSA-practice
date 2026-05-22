function binarySearch(arr, value) {
  if (arr.length === 0) return -1;

  let left = 0;
  let right = arr.length - 1;

  // Find middle point of the array
  let middle = Math.floor((left + right) / 2);

  while (arr[middle] !== value && left < right) {
    // If value is too small, move left pointer up
    if (arr[middle] < value) left = middle + 1;

    // If value is too large, move right pointer down
    if (arr[middle] > value) right = middle - 1;

    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === value ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
