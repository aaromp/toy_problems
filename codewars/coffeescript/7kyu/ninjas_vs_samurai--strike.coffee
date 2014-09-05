# Something is wrong with our Warrior class. The strike method does not work
# correctly. The following shows an example of this code being used:

# ninja = new Warrior('Ninja')
# samurai = new Warrior('Samurai')

# samurai.strike(ninja, 3)
# # ninja.health should == 70
# Can you figure out what is wrong?

Warrior = (@name) ->
  @health = 100

Warrior::strike = (enemy, swings) ->
  enemy.health = Math.max(0, enemy.health - (swings * 10))
