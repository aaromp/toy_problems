# Complete the solution so that it returns true if the first argument(string)
# passed in ends with the 2nd argument (also a string).

# Examples:

# solution('abc', 'bc') # returns true
# solution('abc', 'd') # returns false

# solution = (str, ending) ->
#   str.slice(-ending.length) is ending

solution = (str, ending) ->
  str.slice(-ending.length) is ending

# solution = (str, ending) ->
#   str[-ending.length..] is ending
