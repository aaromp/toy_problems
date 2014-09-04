// An anagram is the result of rearranging the letters of a word to produce a 
// new word. (Ref wikipedia).

// Note: anagrams are case insensitive

// Examples

// foefet is an anagram of toffee
// Buckethead is an anagram of DeathCubeK
// The challenge is to write the function isAnagram to return true if the word 
// test is an anagram of the word original and false otherwise. The function 
// prototype is as given below:

var getCharacterCounts = function(str) {
  return str.split('').reduce(function(characters, character) {
    if (characters[character] === undefined) characters[character] = 1;
    else characters[character]++;

    return characters;
  }, {});
};

var isAnagram = function(test, original) {
  if (test.length !== original.length) return false;

  test = getCharacterCounts(test.toLowerCase());
  original = getCharacterCounts(original.toLowerCase());

  return Object.keys(original).every(function(character) {
    return test[character] === original[character];
  });
};

// var isAnagram = function(test, original) {
//   return original.toLowerCase().split('').sort().join('') === 
//              test.toLowerCase().split('').sort().join('');
// };
