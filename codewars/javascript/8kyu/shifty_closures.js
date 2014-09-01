// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?
var greet = function(name) {
  return function() {
    return 'Hello, ' + name + '!';
  };
};

var greet_abe = greet('Abe');
var greet_ben = greet('Ben');
