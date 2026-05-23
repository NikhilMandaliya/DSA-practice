function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

console.log(bubbleSort([5, 6, 2, 3, 1, 4])); // [1, 2, 3, 4, 5, 6]
console.log(bubbleSort([22, 4, 15, 3, 1, 7])); // [1, 3, 4, 7, 15, 22]
