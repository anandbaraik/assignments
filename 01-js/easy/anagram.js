/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map = {};
  addCharFrquency(str1.toLowerCase(), map);
  subtractCharFrquency(str2.toLowerCase(), map);
  return checkCharFrequency(map);
}

function addCharFrquency(s, map) {
  for (let char of s) {
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char] = map[char] + 1;
    }
  }
}

function subtractCharFrquency(t, map) {
  for (let char of t) {
    if (!map[char]) continue;

    if (map[char]) {
      map[char] = map[char] - 1;
    }
  }
}

function checkCharFrequency(map) {
  for (let char in map) {
    if (!(map[char] == 0)) return false;
  }
  return true;
}
module.exports = isAnagram;
