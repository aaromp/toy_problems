// A binary tree is a structure that has a value and two references to its
// child: left and right. Each of these references are themselves a binary tree
// or undefined to represent an empty tree.

// The leaves in a binary tree are the lower level nodes for which both
// references (left and right) are undefined. For example, in the following
// tree:

//   a
//  / \
// b  c
//     \
//     d

// 'b' and 'd' are leaves while 'a' and 'c' are not. We define the level of a
// 'tree as the number of parent nodes a tree node has. The root of the tree,
// 'therefore, is at level 0. Root's children are at level 1, etc.

// The goal of this kata is to write a function to determine if all leaves of a
// binary tree are at the same level. In the tree shown before the function
// should return false since 'b' and 'd' are at levels 1 and 2, respectively.

// In the following example, the function should return true because now the
// leaves are 'e' and 'd' and both are at level 2:

//    a
//   / \
//  b   c
//  /    \
// e      d
// In this next example:

//     a
//    / 
//   b  
//  /  
// e
// the function should also return true because 'e' is the only leaf.

// If the function is passed an empty tree (undefined) it should return true.
// Similarly, if the tree has only 1 node (the root node) the function should
// return true.

// The Node class can be used as follows:

// var n = Node(1,undefined,Node(2,undefined,undefined));
// var nLeft = n.getLeft();
// var nRight = n.getRight();

var Node = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

Node.prototype.getLeft = function() {
  return this.left;
};

Node.prototype.getRight = function() {
  return this.right;
};

function recAllLeavesAtSameLevel(node, level) {
  var left, right;

  if (node === undefined) return true;

  left = node.getLeft();
  right = node.getRight();

  if (left === undefined && right === undefined) 
    return level === 0 ? true : level;

  if (left !== undefined && right !== undefined) 
    return recAllLeavesAtSameLevel(left, level + 1) === 
           recAllLeavesAtSameLevel(right, level + 1);
  
  return recAllLeavesAtSameLevel(left, level + 1) && 
         recAllLeavesAtSameLevel(right, level + 1);
}

function allLeavesAtSameLevel(node) {
  return recAllLeavesAtSameLevel(node, 0);
}

var sameLevel = new Node(1,new Node(2,new Node(7)),new Node(3,new Node(4)));
var oneLeaf = new Node(1,undefined,new Node(2));
var diffLevel = new Node(1,new Node(2),sameLevel);

console.log(allLeavesAtSameLevel(sameLevel));
console.log(allLeavesAtSameLevel(oneLeaf));
console.log(allLeavesAtSameLevel(diffLevel));

