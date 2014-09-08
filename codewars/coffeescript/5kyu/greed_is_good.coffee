# Greed is a dice game played with five six-sided dice. Your mission, should you
# choose to accept it, is to score a throw according to these rules. You will
# always be given an array with five six-sided dice values.

#  Three 1's => 1000 points
#  Three 6's =>  600 points
#  Three 5's =>  500 points
#  Three 4's =>  400 points
#  Three 3's =>  300 points
#  Three 2's =>  200 points
#  One   1   =>  100 points
#  One   5   =>   50 point

# A single die can only be counted once in each roll. For example, a "5" can
# only count as part of a triplet (contributing to the 500 points) or as a
# single 50 points, but not both in the same roll.

# Example scoring

#  Throw       Score
#  ---------   ------------------
#  1 1 1 1 1   1000 + 100 + 100 = 1100
#  5 1 3 4 1   50 + 2 * 100 = 250
#  1 1 1 3 1   1000 + 100 = 1100
#  2 4 4 5 4   400 + 50 = 450



score = (dice) ->
  rolls = {}

  dice.forEach (roll) ->
    if roll is 1 then roll = 10
    if rolls[roll] is undefined then rolls[roll] = 1 else rolls[roll]++

  Object.keys(rolls).reduce (memo, roll) ->
    result = 0
    roll = parseInt(roll)

    if rolls[roll] >= 3
      result += roll * 100
      rolls[roll] -= 3
    if roll is 10 or roll is 5
      result += roll * rolls[roll] * 10

    memo + result
  , 0
