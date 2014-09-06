// The Array's reverse() method has gone missing! Re-write it, quick-sharp!

// When this method is called, it reverses the order of the items in the array
// it is called on, and then returns that same, original array.

// Here's an example:

// var input = [1, 2, 3, 4];
// input.reverse(); // == [4, 3, 2, 1]
// input; // == [4, 3, 2, 1]

Array.prototype.swap = function(first, second) {
  var temporary;

  temporary = this[first];
  this[first] = this[second];
  this[second] = temporary;
};

// Array.prototype.reverse = function(first, second) {
//   first = first || 0;
//   second = second || this.length - 1;

//   if (second <= first) return this;

//   this.swap(first, second);
//   return this.reverse(first+1, second-1);
// };

Array.prototype.reverse = function() {
  var first, second;

  first = 0;
  second = this.length - 1;
  while (first < second) {
    this.swap(first++, second--);
  }

  return this;
};
