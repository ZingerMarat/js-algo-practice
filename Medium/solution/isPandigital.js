/*
A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples
isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
// 7 is missing.

isPandigital(112233445566778899) ➞ false
*/

function isPandigital( number ) {
  //your code

  const set = new Set()

  while(number > 0){
    const digit = number % 10

    if (!set.has(digit)){
      set.add(digit)
    } 

    number = Math.floor(number / 10)
  }

  return set.size === 10 ? true : false
}

exports.solution = isPandigital;

console.log(isPandigital(98140723568910));
