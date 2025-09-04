/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

function numThenChar(arr) {
  //your code
  const numbers = []
  const letters = []
  const lengths = new Set()
  let index = 0

  const result = []

  for (let subArr of arr) {
    index += subArr.length
    lengths.add(index)
    for (let elem of subArr) {
      if (typeof elem === "number") {
        numbers.push(elem)
      } else {
        letters.push(elem)
      }
    }
  }

  const sorted = [...numbers.sort((a, b) => a - b), ...letters.sort()]

  let start = 0

  for (let i = 0; i <= sorted.length; i++) {
    if (lengths.has(i)) {
      result.push(sorted.slice(start, i))
      start = i
    }
  }

  return result
}

console.log(
  numThenChar([
    [1, 2, 4.4, "f", "a", "b"],
    [0],
    [0.5, "d", "X", 3, "s"],
    ["f", "e", 8],
    ["p", "Y", "Z"],
    [12, 18],
  ])
)

exports.solution = numThenChar
