/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

function lastCommonMultiple(a, b) {
  //your code
  let num1 = a < b ? a : b
  let num2 = a + b - num1

  //GCD
  while(num2!==0){
    [num1, num2] = [num2, num1 % num2]
  }

  const gcd = num1


  //LCD
  return (a * b) / gcd
}

exports.solution = lastCommonMultiple;
