// You have to define a function to calculate the division of two factorial 
// numbers. This can be useful for large numbers.

// In mathematics, the factorial of integer n is written as n!. It is equal to 
// the product of n and every integer preceding it. For example: 
// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// Some hints: We can see that (n + 1)! = (n + 1) * n!. 
// So (n + 1)! / n! = (n + 1)

// We know that 0! = 1 (because n! = (n + 1)! / (n + 1) 
  // therefore 0! = 1! / 1 = 1)

// And your solution should be able to calculate n! / d!.

// * Please, don't worry about the parameters. You will only receive positive 
// integers, and the first one will be greater than the second one

// - n and d will be positive integers, and also n > d. No need to check any of that
// function factorialDivision(n, d) {
//   var result, i;
  
//   result = 1;
//   for (i = n; i > d; i--) {
//     result *= i;
//   }
  
//   return result;
// }

function factorialDivision(n, d) {
  // base case: n equals d so n!/d! is 1
  if (n === d) return 1;

  // recursive case: multiply n and (n-1)!/d!
  return n * factorialDivision(n-1, d);
}

