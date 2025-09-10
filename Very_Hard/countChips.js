/*
Write a chip counter for a battleship board. This function should return
the number of chips (ships) present on the 2-D array.

A chip is a segment of contiguous 1s, placed either horizontally or vertically.
Chips cannot touch each other, not even diagonally. Chips can be 1x1 in size.

Examples

countChips([
  [1,1,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,1,1],
  [0,1,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,1]
]) ➞ 6

countChips([
  [1,0,1,0],
  [0,1,0,1],
  [1,0,1,0],
  [0,1,0,1]
]) ➞ 8
*/

function countChips(matrix) {
  let count = [0, 0]

  for (let r = 0; r < matrix.length; r++) {
    const [single, nonSingle] = countInRow(matrix[r], r, matrix)
    count[0] += single
    count[1] += nonSingle
  }

  matrix[0].map((_, i) => matrix.map((row) => row[i]).reverse())

  for (let r = 0; r < matrix.length; r++) {
    const [single, nonSingle] = countInRow(matrix[r], r, matrix)
    count[1] += nonSingle
  }

  console.log(count)
  return count
}

const countInRow = (row, rowIndex, matrix) => {
  let flag = false
  let count = [0, 0]

  for (let i = 0; i < row.length; i++) {
    const hasTop = rowIndex > 0 && matrix[rowIndex - 1][i] === 1
    const hasBottom = rowIndex < matrix.length - 1 && matrix[rowIndex + 1][i] === 1
    const hasLeft = i > 0 && row[i - 1] === 1
    const hasRight = i < row.length - 1 && row[i + 1] === 1

    if (row[i] === 1 && !hasLeft && !hasRight && !flag) {
      if (!hasTop && !hasBottom) {
        flag = true
        count[0]++
      } else {
        flag = true
        count[1]++
      }
    } else if (row[i] === 0) {
      flag = false
    }
  }

  return count
}

countChips([
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
])

countChips([
  [1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 1],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
])

exports.solution = countChips
