/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

function ascending(string) {
  //your code

  for (let i = Math.round(string.length / 2); i > 0; i--) {
    let backetSize = i
    const backets = []
    let startIndex = 0
    let endIndex = backetSize

    while (startIndex < string.length) {
      const number = string.slice(startIndex, endIndex)

      backets.push(Number(number))

      if (resizeNeeded(number, backetSize)) {
        startIndex += backetSize
        backetSize += 1
        endIndex += backetSize
      } else {
        startIndex += backetSize
        endIndex += backetSize
      }
    }

    console.log(backets)

    if (isConsecutive(backets)) {
      return true
    }
  }

  return false
}

const isConsecutive = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return false
    }
  }
  return true
}

const resizeNeeded = (number, size) => {
  if (String(Number(number) + 1).length > size) {
    return true
  }
  return false
}

exports.solution = ascending

console.log(ascending("91011"))
