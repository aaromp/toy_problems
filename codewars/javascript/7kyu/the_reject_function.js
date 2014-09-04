// Let's implement the reject() function...


// var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]

function reject(array, iterator) {
  return array.filter(function(number) {
    return !iterator(number);
  });
}
