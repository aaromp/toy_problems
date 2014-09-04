# Triangular numbers are so called because of the equilateral triangular shape
# that they occupy when laid out as dots. i.e.

# 1st (1)   2nd (3)    3rd (6)
# *          **        ***
#            *         **
#                      *
# You need to return the nth triangular number. You should return 0 for out of
# range values, but you will always be passed an integer.

triangular = (n) ->
  if n < 1 then return 0

  n + triangular n-1
