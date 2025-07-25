/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

function primeFactorize( number ) {
  //your code
  const res = []
  let num = number

  for (let i = 2; i <= num; i++){
    if (num % i === 0){
      while (num % i === 0){
        res.push(i)
        num = num / i
      }
    }
  }

  return res
}

console.log(primeFactorize(77));


exports.solution = primeFactorize;