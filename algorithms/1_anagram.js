/* Problem: 
An anagram is a word formed by rearranging the letters of a different word, typically using all the original letters exactly once. For example, "listen" and "silent" are anagrams.
Write a function that takes two strings as input and returns true if they are anagrams of each other, and false otherwise.
Example:
isAnagram('listen', 'silent'); // true
isAnagram('hello', 'world'); // false
*/

function isAnagram(str1, str2) {
  // Check the length of the strings
  if (str1.length !== str2.length) return false;

  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Create a frequency map for the strings
  const frequencyMap1 = createFrequencyMap(str1);
  const frequencyMap2 = createFrequencyMap(str2);

  // Compare the frequency maps
  for (let char in frequencyMap1) {
    if (frequencyMap1[char] !== frequencyMap2[char]) {
      return false;
    }
  }

  return true;
}

function createFrequencyMap(str) {
  const frequencyMap = {};
  for (let char of str) {
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }
  return frequencyMap;
}

console.log('', '', isAnagram('', '')); // true
console.log('a', 'ab', isAnagram('a', 'ab')); // false
console.log('listen', 'silent', isAnagram('listen', 'silent')); // true
console.log('hello', 'world', isAnagram('hello', 'world')); // false
console.log('Triangle', 'Integral', isAnagram('Triangle', 'Integral')); // true

// Should we check for case sensitivity? No
// Should be care about spaces and punctuation? No

// function isAnagram(str1, str2) {
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     // Check the length of the strings
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     // Sort the characters of both strings and compare
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
// }
