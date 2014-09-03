# You probably know, that in Javascript (and also Ruby) there is no concept of
# interfaces. There is only a concept of inheritance, but you can't assume that
# a certain method or property exists, just because it exists in the parent
# prototype / class. We want to find out, whether a given object fulfils the
# requirements to implement the "SantaClausable" interface. We need to implement
# a method which checks for this interface.

# Rules

# The SantaClausable interface is implemented, if all of the following methods
# are defined on an object:

# sayHoHoHo() / say_ho_ho_ho
# distributeGifts() / distribute_gifts
# goDownTheChimney() / go_down_the_chimney
# Example

# santa =
#   sayHoHoHo: ->
#     console.log "Ho Ho Ho!"

#   distributeGifts: ->
#     console.log "Gifts for all!"

#   goDownTheChimney: ->
#     console.log "*whoosh*"

# notSanta = sayHoHoHo: ->
#   console.log "Oink Oink!"
#   # no distributeGifts() and no goDownTheChimney()

# isSantaClausable santa # must return TRUE
# isSantaClausable notSanta # must return FALSE

isSantaClausable = (object) ->
  ['sayHoHoHo', 'distributeGifts', 'sayHoHoHo'].every (property) ->
    typeof object[property] is 'function'