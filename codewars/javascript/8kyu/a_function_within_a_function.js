// Given an input n, write a function always that returns a function which 
// returns n

//   var three = always(3);
//   three(); // 3

// return a function that returns n
function always (n) {
  return function() {
    return n;
  };
}