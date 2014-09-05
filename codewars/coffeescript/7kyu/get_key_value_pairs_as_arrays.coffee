# Complete the keysAndValues function so that it takes in an object and returns
# the keys and values as separate arrays.

# Example:

# keysAndValues({a: 1, b: 2, c: 3}) should return [['a', 'b', 'c'], [1, 2, 3]]
# Style Points (JS/CoffeeScript only): This kata only tests for data that uses
# object literal notation (simple objects). For extra style, can you get your
# method to check for objects that extend their prototype?

keysAndValues = (data) ->
  Object.keys(data).reduce (memo, key) ->
    memo[0].push key
    memo[1].push data[key]
    memo
  , [[], []]

# keysAndValues = (data) ->
#   [(keys for keys of data), (values for keys, values of data)]
