// Sum Array

// Write a method sum that takes an array of numbers and returns the sum of the 
// numbers. These may be integers or decimals. The numbers can also be negative. 
// If the array does not contain any numbers then you should return 0.

// Sum Numbers
function sum(numbers) {
  'use strict';

  var result, i;

  result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;
}