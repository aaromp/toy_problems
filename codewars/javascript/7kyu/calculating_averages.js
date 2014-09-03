// Let's build a calculator that can calculate the average for an arbitrary
// number of arguments.

// The test expects you to provide a Calculator object with an average method:

// Calculator.average()
// The test also expects that when you pass no arguments, it returns 0. The
// arguments are expected to be integers.

// It expects Calculator.average(3,4,5) to return 4.

var Calculator = {
 average: function() {
  if (arguments.length === 0) return 0;

  return Array.prototype.reduce.call(arguments, function(memo, number) {
    return memo + number;
  }, 0) / arguments.length;
 }
};
