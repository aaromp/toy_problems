# The task here is to create a class that maintains a sorted list of numbers in
# ascending order.

# The class will have two methods:

# add(x) will add x to the list
# get(i) will get the ith value in the list
# You should also provide a length property that gives the length of the list.

# Efficiency matters!

class SortedList
  constructor: ->
    @storage = []
    Object.defineProperty(this, 'length', {
      get: ->
        @storage.length
      set: (value) ->
        @storage.length = value
    })
  
  add: (number) ->
    @storage.push(number)
    for current, index in @storage by -1
      if current < @storage[index-1]
        @storage[index] = @storage[index-1]
        @storage[index-1] = current
      else return
  
  get: (index) ->
    @storage[index]


list = new SortedList()

list.add 1
console.log(list.get(0), 1)

list.add 3
console.log(list.get(1), 3)

list.add -123
console.log(list.get(0), -123)

list.add 17
console.log(list.get(3), 17)

list.add 3
list.add 0

console.log list.length, 6
