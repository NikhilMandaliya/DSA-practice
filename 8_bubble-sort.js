function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let isSwapped = false;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

console.log(bubbleSort([5, 6, 2, 3, 1, 4])); // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([22, 4, 15, 3, 1, 7])); // [1, 3, 4, 7, 15, 22]
console.log(bubbleSort([7, 1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 7]
console.log(bubbleSort([1, 15, 6, 19, 22, 24, 27, 32, 45])); // [1, 6, 15, 19, 22, 24, 32, 45]
