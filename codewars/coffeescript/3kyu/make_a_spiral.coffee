# Your task, is to create a NxN spiral with a given size.

# For example, spiral with size 5 should look like this:

# 00000
# ....0
# 000.0
# 0...0
# 00000

# and with the size 10:

# 0000000000
# .........0
# 00000000.0
# 0......0.0
# 0.0000.0.0
# 0.0..0.0.0
# 0.0....0.0
# 0.000000.0
# 0........0
# 0000000000

# Return value should contain array of arrays, of 0 and 1, for example for given
# size 5 result should be:

# [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
# Because of the edge-cases for tiny spirals, the size will be at least 5.

# General rule-of-a-thumb is, that the snake made with '1' cannot touch to
# itself.

recSpiralize = (spiral, start, end) ->
  if start % 2 is 0
    primary = 1
    secondary = 0
  else
    primary = 0
    secondary = 1

  if Math.floor(spiral.length/2) is start
    if spiral.length % 2 is 1 then spiral[start][start] = primary
    return spiral

  for index in [start..end]
    spiral[start][index] = primary
    spiral[end][index] = primary
    spiral[index][start] = primary
    spiral[index][end] = primary

  spiral[start+1][start] = secondary

  recSpiralize(spiral, start+1, end-1)

spiralize = (size) ->
  spiral = ((undefined for n in [0...size]) for n in [0...size])

  recSpiralize(spiral, 0, size-1)

console.log spiralize(5)
console.log spiralize(6)
console.log spiralize(7)
console.log spiralize(8)
console.log spiralize(9)
console.log spiralize(10)
