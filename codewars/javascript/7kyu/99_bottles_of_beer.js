// Instructions

// Write a function sing that returns the lyrics for the song 99 Bottles of Beer
// as a an array.

// Lyrics

// You can find the complete lyrics here.

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

// // and so on ...

// 3 bottles of beer on the wall, 3 bottles of beer.
// Take one down and pass it around, 2 bottles of beer on the wall.

// 2 bottles of beer on the wall, 2 bottles of beer.
// Take one down and pass it around, 1 bottle of beer on the wall.

// 1 bottle of beer on the wall, 1 bottle of beer.
// Take one down and pass it around, no more bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
// Result

// The returned result should be an array of all the lines in the song.

// Example

// ['99 bottles of beer on the wall, 99 bottles of beer.',
// 'Take one down and pass it around, 98 bottles of beer on the wall.',
// '98 bottles of beer on the wall, 98 bottles of beer.',
// // and so on ...
// '3 bottles of beer on the wall, 3 bottles of beer.',
// 'Take one down and pass it around, 2 bottles of beer on the wall.',
// '2 bottles of beer on the wall, 2 bottles of beer.',
// 'Take one down and pass it around, 1 bottle of beer on the wall.',
// '1 bottle of beer on the wall, 1 bottle of beer.',
// 'Take one down and pass it around, no more bottles of beer on the wall.',
// 'No more bottles of beer on the wall, no more bottles of beer.',
// 'Go to the store and buy some more, 99 bottles of beer on the wall.'];

var plural = function(count) {
  return count === 1 ? '' : 's';
};

var takeBottle = function(count) {
  count = count || 'no more';
  return 'Take one down and pass it around, ' +
         count + ' bottle' + plural(count) + ' of beer on the wall.';
};

var countBottles = function(count) {
  return count + ' bottle' + plural(count) + ' of beer on the wall, ' + 
         count + ' bottle' + plural(count) + ' of beer.';
};

var sing = function() {
  var count, song;

  song = [];
  for (count = 99; count >=1; count--) {
    song.push(countBottles(count));
    song.push(takeBottle(count-1));
  }

  song.push('No more bottles of beer on the wall, no more bottles of beer.');
  song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
  
  return song;
};
