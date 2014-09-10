# Write a function that finds the sum of all its arguments.

# eg:

# sum(1, 2, 3) => 6
# sum(8, 2, 10) => 20

# Note that Python's function name is sum_args, as to avoid cofusion with the
# preexistsing sum function.

# Translations are always welcome.

# TIPS:

# ruby/python : http://lmgtfy.com/?q=Ruby+splat+operator

# JS/Coffeescript : http://lmgtfy.com/?q=Javascript+arguments+variable

# sum = () ->
#   Array.prototype.reduce.call arguments, (memo, number) ->
#     memo + number
#   , 0

sum = (args...) ->
  args.reduce (memo, number) ->
    memo + number
  , 0
