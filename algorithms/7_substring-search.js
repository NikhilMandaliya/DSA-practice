function search(str, pattern) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) {
        break;
      }
      if (j === pattern.length - 1) {
        count++;
      }
    }
  }

  return count;
}

console.log(search('string', 'ing')); // 1
console.log(search('loiie loled', 'lol')); // 1
console.log(search('hi john hi', 'hi')); // 2
