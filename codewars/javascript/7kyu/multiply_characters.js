// Here we have a function that help us spam our hearty laughter. 
// But is not working! I need you to find out why...

// Expected results:

// spam(1);//hue
// spam(6);//huehuehuehuehuehue
// spam(14);//huehuehuehuehuehuehuehuehuehuehuehuehuehue

function spam(number){
  var result = '';
  
  while (number--) result += 'hue';
  
  return result;
}

// function spam(number){
//   return Array(number + 1).join('hue');
// }
