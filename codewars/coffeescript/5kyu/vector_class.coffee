# Create a Vector object that supports addition, subtraction, dot products, and
# norms. So, for example:

# a = new Vector([1,2,3])
# b = new Vector([3,4,5])
# c = new Vector([5,6,7,8])
# a.add(b) # should return Vector([4,6,8])
# a.subtract(b) # should return Vector([-2,-2,-2])
# a.dot(b) # should return 1*3+2*4+3*5 = 26
# a.norm() # should return sqrt(1^2+2^2+3^2)=sqrt(14)
# a.add(c) # throws an error

# If you try to add, subtract, or dot two vectors with different lengths, you
# must throw an error!

# Also provide:

# a toString function, so that using the vectors from above, a.toString() ===
# '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
# an equals function, so that two vectors who have the same components are equal
# The test cases will utilize the user-provided equals method.

class Vector
  constructor: (@components) ->

  toString: ->
    "(#{@components.join(',')})"

  equals: (vector) ->
    @toString() is vector.toString()
  
  add: (vector) ->
    if vector.components.length isnt @components.length then throw 'error!'

    new Vector @components.map (element, index) ->
      element + vector.components[index]

  subtract: (vector) ->
    if vector.components.length isnt @components.length then throw 'error!'

    new Vector @components.map (element, index) ->
      element - vector.components[index]

  dot: (vector) ->
    if vector.components.length isnt @components.length then throw 'error!'

    @components.reduce (memo, element, index) ->
      memo + element * vector.components[index]
    , 0

  norm: ->
    Math.sqrt @components.reduce (memo, element, index) ->
      memo + Math.pow(element, 2)
    , 0

