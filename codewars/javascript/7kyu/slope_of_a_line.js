// Your challenge is to write a function named getSlope(p1, p2) that calculates 
// the slope of the line through two points. Each point that the function takes 
// in is an array 2 elements long. The first number is the x coordinate and the 
// second number is the y coordinate. If the line through the two points is 
// vertical, the function should return null. If the same point is given twice, 
// the function should return null.

function getSlope(p1, p2) {
  if (p1[0] === p2[0] && p1[1] === p2[1]) return null;
  
  return (p1[1] - p2[1]) / (p1[0] - p2[0]);
}
