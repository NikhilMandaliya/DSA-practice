function mergeSort(arr, comparator = (a, b) => a - b) {
  if (arr.length <= 1) return arr;

  const middleIndex = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middleIndex), comparator);
  const right = mergeSort(arr.slice(middleIndex), comparator);

  return merge(left, right, comparator);
}

// console.log(mergeSort([5, 6, 2, 3, 1, 4])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeSort([22, 4, 15, 3, 1, 7])); // [1, 3, 4, 7, 15, 22]
// console.log(mergeSort([7, 1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 7]
// console.log(mergeSort([1, 15, 6, 19, 22, 24, 27, 32, 45])); // [1, 6, 15, 19, 22, 24, 32, 45]

function merge(arr1, arr2, comparator = (a, b) => a - b) {
  const result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) <= 0) {
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

// Testing merge
// console.log(merge([1, 3], [2, 4])); // [1, 2, 3, 4];
// console.log(merge([10, 30], [2, 4])); // [2, 4, 10, 30];
// console.log(merge([1, 2], [])); // [1, 2];

// const arr1 = [1, 3, 4, 5];
// const arr2 = [2, 4, 6, 8];
// console.log(merge(arr1, arr2)); // [1,2,3,4,4,5,6,8]

// const arr3 = [-2, -1, 0, 4, 5, 6];
// const arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];
// console.log(merge(arr3, arr4)); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// const arr5 = [3, 4, 5];
// const arr6 = [1, 2];
// console.log(merge(arr5, arr6)); // [1,2,3,4,5]

// const names = ['Bob', 'Ethel', 'Christine'];
// const otherNames = ['M', 'Colt', 'Allison', 'SuperLongNameOMG'];
// function stringLengthComparator(str1, str2) {
//   return str1.length - str2.length;
// }
// console.log(merge(names, otherNames, stringLengthComparator)); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]

// Testing mergeSort
console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));

const nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(mergeSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

const kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

const moarKittyData = [
  {
    name: 'LilBub',
    age: 7,
  },
  {
    name: 'Garfield',
    age: 40,
  },
  {
    name: 'Heathcliff',
    age: 45,
  },
  {
    name: 'Blue',
    age: 1,
  },
  {
    name: 'Grumpy',
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
