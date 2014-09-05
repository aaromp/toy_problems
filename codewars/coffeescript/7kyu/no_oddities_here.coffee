# Description:

# Write a small function that returns the values of an array that are not odd.

# All values in the array will be integers. Return the good values in the order
# they are given.

# noOdds = ( values ) ->

noOdds = (values) ->
  values.filter (element) ->
    element % 2 isnt 1

# noOdds = (values) ->
#   value for value in values when value % 2 isnt 1
