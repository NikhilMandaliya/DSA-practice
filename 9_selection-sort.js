function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

console.log(selectionSort([5, 6, 2, 3, 1, 4])); // [1, 2, 3, 4, 5, 6]
console.log(selectionSort([22, 4, 15, 3, 1, 7])); // [1, 3, 4, 7, 15, 22]
console.log(selectionSort([7, 1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 7]
console.log(selectionSort([1, 15, 6, 19, 22, 24, 27, 32, 45])); // [1, 6, 15, 19, 22, 24, 32, 45]
