# Create a function called reverse for the String prototype that will allow the
# following functionality:

# "String".reverse();// => returns "gnirtS"
# "Super awesome string".reverse();// => returns "gnirts emosewa repuS"
# The reverse function should NOT modify the original string.

String::reverse = ->
  (character for character in @ by -1).join('')

# # didn't know String didn't have reverse()
# String::reverse = ->
#   @split('').reverse().join('')
