// Implement all required functions in order to create the following sentences
// by calling those functions:

// Adam(has(a(dog()))); must return "Adam has a dog."
// The(name(of(the(dog(is(also(Adam()))))))); must return "The name of the dog
// is also Adam."

function say(word) {
  return arguments[1] === undefined ? word + '.': word + ' ' + arguments[1];
}

function Adam() {
  return say('Adam', arguments[0]);
}
function has() {
  return say('has', arguments[0]);
}
function a() {
  return say('a', arguments[0]);
}
function dog() {
  return say('dog', arguments[0]);
}
function The() {
  return say('The', arguments[0]);
}
function name() {
  return say('name', arguments[0]);
}
function of() {
  return say('of', arguments[0]);
}
function the() {
  return say('the', arguments[0]);
}
function is() {
  return say('is', arguments[0]);
}
function also() {
  return say('also', arguments[0]);
}

// function say() {
//   return arguments.callee.caller.name + (arguments[0][0] ? ' ' + arguments[0][0] : '.');
// }

// function Adam() {
//   return say(arguments);
// }
// function has() {
//   return say(arguments);
// }
// function a() {
//   return say(arguments);
// }
// function dog() {
//   return say(arguments);
// }
// function The() {
//   return say(arguments);
// }
// function name() {
//   return say(arguments);
// }
// function of() {
//   return say(arguments);
// }
// function the() {
//   return say(arguments);
// }
// function is() {
//   return say(arguments);
// }
// function also() {
//   return say(arguments);
// }
