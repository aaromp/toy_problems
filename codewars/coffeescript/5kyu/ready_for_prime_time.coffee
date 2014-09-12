# We need prime numbers and we need them now!

# Write a method that takes a maximum bound and returns all primes starting with
# 0 up-to and including the maximum bound.

# For example:

# prime(11);
# Should return an array that looks like this:

# [2,3,5,7,11]

prime = (n) ->
  if n < 2 then return []

  primes = [2..n]
  for number in primes
    if number isnt undefined then primes = primes.filter (current) ->
      !(current > number and current % number is 0)

  primes
