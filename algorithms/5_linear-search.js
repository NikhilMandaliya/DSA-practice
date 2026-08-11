function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([5, 12, 9, 0, 2, 26, 7], 2));
console.log(linearSearch([5, 12, 9, 0, 2, 26, 7], 6));
console.log(linearSearch(['apple', 'banana', 'orange'], 'apple'));
