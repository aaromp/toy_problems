// Welcome to the Mathematics gameshow. I'm your host, Apex Rhombus, and it's 
// time for the lightning round!

// Today we'll talk about a hypothetical bottle. This entire bottle weighs 
// 120 grams. Its contents weigh twice as much as the bottle itself. What, 
// may I ask, do the contents weigh?

// ...Did you guess 80 grams? Correct! Now that you've got that idea, I'm gonna 
// ask you that question in 10 different ways so you'd better get ready!

// Let's make a contentWeight function that takes in two parameters: 
// bottleWeight and scale. This function will return the weight of the contents 
// inside the bottle.

// bottleWeight will be an integer representing the weight of the entire bottle 
// (contents included).

// scale will be a string that you will need to parse. It will tell you how the 
// content weight compares to the weight of the bottle by itself. 2 times 
// larger, 6 times larger, and 15 times smaller would all be valid strings 
// (smaller and larger are the only comparison words).

// The first test case has been filled out for you. Good luck!

/*
* Takes a bottleWeight and scale of the bottle to its contents
* and returns the weight of its contents
* @param {int} bottleWeight:
*  The weight of the entire bottle and contents
* @param {string} scale:
*  A string comparing the weight of the bottle contents to the weight of the 
*  bottle by itself
* Acceptable values: ('2 times larger', '4 times larger', '50 times smaller') 
*/
function contentWeight(bottleWeight, scale) {
  var size, direction, fraction;

  scale = scale.split(' ');
  size = parseInt(scale[0]);
  direction = scale[2];
  fraction = bottleWeight / (size + 1);

  return direction === 'larger' ? fraction * size : fraction;
}
