# Write a class that, when given a string, will return an uppercase string with
# each letter shifted forward in the alphabet by however many spots the cipher
# was initialized to.

# For example:

# c = new CaesarCipher(5) # creates a CipherHelper with a shift of five
# c.encode('Codewars') # returns 'HTIJBFWX'
# c.decode('BFKKQJX') # returns 'WAFFLES'

# If something in the string is not in the alphabet (e.g. punctuation, spaces),
# simply leave it as is.

# http://www.codewars.com/kata/526d42b6526963598d0004db/train/coffeescript

class CaesarCipher
  constructor: (@shift = @shift % 26) ->
    @codes = ['A'.charCodeAt(0)..'Z'.charCodeAt(0)]
    @encoding = @codes.slice(@shift).concat(@codes.slice(0, @shift))
    @decoding = @codes.slice(-@shift).concat(@codes.slice(0, -@shift))

  codify: (string, coding) ->
    string.split('').map((char) ->
      if char.match(/[^a-zA-Z]/) then return char
      String.fromCharCode(coding[char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0)])
    , @).join('')

  encode: (string) ->
    @codify string, @encoding
    
  decode: (string) ->
    @codify string, @decoding
