/*
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
 [1, 5, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ true

sudokuValidator([
 [1, 1, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ false
*/

function sudokuValidator(matrix) {
  return check3on3(matrix) && checkCols(matrix) && checkRows(matrix)
}

const check3on3 = (matrix) => {
  for (let j = 0; j < matrix.length; j += 3) {
    const rowOf3 = matrix.slice(j, j + 3)

    for (let i = 0; i < matrix.length; i += 3) {
      let arr = []
      let line = 0
      while (line < 3) {
        arr.push(rowOf3[line].slice(i, i + 3))
        line++
      }
      if (!checkSet(arr)) return false
    }
  }

  return true
}

const checkRows = (matrix) => {
  for (let row of matrix) {
    if (!checkSet(row)) return false
  }

  return true
}

const checkCols = (matrix) => {
  let cols = []

  for (let col = 0; col < matrix.length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      cols.push(matrix[row][col])
    }
    if (!checkSet(cols)) return false
    cols = []
  }

  return true
}

const checkSet = (matrix) => {
  const set = new Set()
  const flated = matrix.flat()

  flated.forEach((e) => set.add(e))

  return set.size === 9 ? true : false
}

console.log(
  sudokuValidator([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 2, 9, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
)

exports.solution = sudokuValidator
