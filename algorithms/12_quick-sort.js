function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

// Should return correct index of first element
// and mutate the array to put first element in the correct position with smaller values on the left and larger values on the right
function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < end + 1; i++) {
    const result = comparator ? comparator(arr[i], pivot) < 0 : pivot > arr[i];
    if (result) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, comparator, left, right);
    quickSort(arr, comparator, left, pivotIndex - 1);
    quickSort(arr, comparator, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([]));
