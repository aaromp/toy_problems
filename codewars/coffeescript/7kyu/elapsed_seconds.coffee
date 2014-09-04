# Complete the function so that it returns the number of seconds that have
# elapsed between the start and end times given.

# Tips:

# The start/end times are given as Date (JS/CoffeeScript) instances.
# The start time will always be before the end time.

elapsedSeconds = (startDate, endDate) ->
  (endDate.getTime() - startDate.getTime()) / 1000
