function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middleIndex));
  const right = mergeSort(arr.slice(middleIndex));

  return merge(left, right);
}

console.log(mergeSort([5, 6, 2, 3, 1, 4])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSort([22, 4, 15, 3, 1, 7])); // [1, 3, 4, 7, 15, 22]
console.log(mergeSort([7, 1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 7]
console.log(mergeSort([1, 15, 6, 19, 22, 24, 27, 32, 45])); // [1, 6, 15, 19, 22, 24, 32, 45]

function merge(arr1, arr2) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// console.log(merge([1, 3], [2, 4])); // [1, 2, 3, 4];
// console.log(merge([10, 30], [2, 4])); // [2, 4, 10, 30];
// console.log(merge([1, 2], [])); // [1, 2];
