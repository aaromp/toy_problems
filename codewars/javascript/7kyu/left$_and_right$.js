// Once upon a time, more precisely upon BASIC time, there were 2 functions
// named LEFT$ and RIGHT$ (use uppercase as it used to do in these early years).

// These functions let you read left(/right)-most characters of a string.

// use: LEFT$ (str, i) -> returns i left-most characters of str.
// - eg:
// A$="ABCDEFG":PRINT LEFT$(A$,3) - prints ABC
// and RIGHT$ (str, i ), of course, returns i right-most characters of str.

// So, your mission is...

// ...to write 2 functions ( left$(str, i) & right$(str, i) ) that will work as
// ...the BASIC ones did,... except :

// i may be a negative integer. In this case the function returns the whole
// string but i right(/left)-most chars (respectively in left$(/right$)
// function). if i === 0 : returns an empty string; if no i is provided consider
// it should be 1 ( not zero ). if i is greater than str length : returns the
// whole str. and

// if i is a string ( yes it can ) : returns part of str at left(/right) of i.
// Examples:

// var str = 'Hello (not so) cruel World!'

// left$(str,5)   // -> 'Hello'
// left$(str,-23) // -> 'Hello'
// left$(str,1)   // -> 'H'
// left$(str)     // -> 'H' too
// left$(str,0)   // -> ''
// left$(str,99)  // -> 'Hello (not so) cruel World!'

// right$(str,6)  // -> 'World!'
// right$(str)    // -> '!'

// left$(str,'o') // -> 'Hell'
// right$(str,'o')// -> 'rld!'

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
};

function left$(str, i) {
  if (i === undefined) i = 1;
  if (typeof i === 'string') i = str.search(i);
  return str.slice(0, i);
}

function right$(str, i){
  if (typeof i === 'string') i = i.reverse();
  return left$(str.reverse(), i).reverse();
}
