// Heap

// Heap is a data structure, that takes elements in arbitrary order, and returns
// them in a sorted order one by one.

// Implementing a min heap

// In this kata, we will implement a min heap, it is going to have 2 methods:

// push

// Takes a value and adds it to a heap

// pop

// Finds the smallest value in the heap, removes it from the heap, and returns it

// var heap = new MinHeap();
// heap.push(4);
// heap.push(1);
// heap.push(7);
// heap.push(9);
// heap.push(2);
// console.log( heap.pop()); // 1
// console.log( heap.pop()); // 2
// console.log( heap.pop()); // 4
// console.log( heap.pop()); // 7
// console.log( heap.pop()); // 9

// Please note that for this kata we do not assess the effiency of your
// implementation, so anything that acts like a heap will pass the tests.

var getParent = function(index) {
  return Math.floor(index / 2);
};

var getLeftChild = function(index) {
  return 2 * index;
};

var getRightChild = function(index) {
  return getLeftChild(index) + 1;
};

function MinHeap(){
  this.storage = [];
}

MinHeap.prototype.swap = function(first, second) {
  var temporary;

  temporary = this.storage[first];
  this.storage[first] = this.storage[second];
  this.storage[second] = temporary;
};

MinHeap.prototype.bubbleUp = function(index){
  var current, parent;

  if (index === 1) return;

  current = index-1;
  parent = getParent(index)-1;

  if (this.storage[current] < this.storage[parent]) {
    this.swap(current, parent);
    this.bubbleUp(getParent(index));
  }
};

MinHeap.prototype.push = function(number){
  this.storage.push(number);
  this.bubbleUp(this.storage.length);
};

MinHeap.prototype.bubbleDown = function(index){
  var child, left, right;

  left = getLeftChild(index);
  right = getRightChild(index);

  if (left > this.storage.length && right > this.storage.length) return;
  if (right > this.storage.length) child = left-1;
  else child = this.storage[left-1] < this.storage[right-1] ? left-1 : right-1;

  if (this.storage[index-1] > this.storage[child]) {
    this.swap(index-1, child);
    this.bubbleDown(child+1);
  }
};

MinHeap.prototype.pop = function(){
  var result;

  this.swap(0, this.storage.length-1);
  result = this.storage.pop();
  this.bubbleDown(1);

  return result;
};
