// Write a function named numbers that returns true if all the parameters it is
// passed are of the Number type. Otherwise, the function should return false.
// The function should accept any number of parameters.

// Example usage:

// numbers(1, 4, 3, 2, 5); // true
// numbers(1, "a", 3); // false
// numbers(1, 3, NaN); // true

function numbers() {
  return Array.prototype.every.call(arguments, function(argument) {
    return typeof argument === 'number';
  });
}
