# Write a function that returns all of the sublists of a list or Array.

# Your function should be pure; it cannot modify its input.

# Example:

# power [1,2,3]
# # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
# For more details regarding this, see the power set entry in wikipedia.

recPower = (soFar, toGo, depth, results) ->
  if soFar.length is depth then results.push(soFar)

  for element, index in toGo
    recPower(soFar.concat(element), toGo.slice(index+1), depth+1, results)

  results

power = (array) ->
  recPower([], array, 0, [])
