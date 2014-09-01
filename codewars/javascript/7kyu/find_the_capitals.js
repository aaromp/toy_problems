// Write a function capitals that takes a single string (word) as argument. 
// The functions must return an ordered list containing the indexes of all 
// capital letters in the string.

var capitals = function (word) {
  var result, index;

  result = [];
  for(index = 0; index < word.length; index++) {
    if (word[index] === word[index].toUpperCase()) result.push(index);
  }

  return result;
};
