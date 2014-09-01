# Correct this code, so that the greet function returns the expected value.

Person = (name) ->
  @name = name

Person::greet = (otherName) ->
  "Hi #{otherName}, my name is #{@name}"
