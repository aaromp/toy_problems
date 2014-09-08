generateHashtag = (str) ->
  if str is '' then return false

  str = str.split(' ').map((word) ->
    word[0].toUpperCase() + word[1..]
  ).join('')
  
  if str.length > 139 then return false else return "##{str}"
