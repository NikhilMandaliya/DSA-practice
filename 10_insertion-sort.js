function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

console.log(insertionSort([5, 6, 2, 3, 1, 4])); // [1, 2, 3, 4, 5, 6]
console.log(insertionSort([22, 4, 15, 3, 1, 7])); // [1, 3, 4, 7, 15, 22]
console.log(insertionSort([7, 1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 7]
console.log(insertionSort([1, 15, 6, 19, 22, 24, 27, 32, 45])); // [1, 6, 15, 19, 22, 24, 32, 45]
