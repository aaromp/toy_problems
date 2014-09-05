// You have an array of integers and have a frog that starts at the first
// position.

// Every integer tells you the length of step that you have to make. The length
// is measured in number of indices.

// Your objective is to find how many steps the frog needs to make to go out of
// array.

// The function should return count of steps or -1 in any other case such as:
// the frog can't move out of the array.

// data = [1, 2, 1, 5]; // 1 -> 2 -> 5 -> out  steps = 3 
// data = [1, -1] // 1 -> -1 -> 1 -> -1 -> .... steps = -1

function solution(array) {
  var indices, index;

  indices = {};
  for (index = 0; array[index] !== undefined; index += array[index]) {
    if (indices[index]) return -1;
    indices[index] = true;
  }

  return Object.keys(indices).length || -1;
}
