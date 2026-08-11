function getDigit(number, digit) {
  return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
}

// function getNumber(number, digit) {
//   return parseInt(number / Math.pow(10, digit))
//     .toString()
//     .at(-1);
// }

function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// function digitCount(number) {
//   return String(number).length;
// }

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  const maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(radixSort([4444, 22, 1, 333, 55555, 666666])); // [1, 22, 333, 4444, 55555, 666666]
console.log(radixSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(radixSort([0, 10, 7, 4])); // [0, 4, 7, 10]
console.log(radixSort([1, 2, 3])); // [1, 2, 3]
console.log(radixSort([]));
