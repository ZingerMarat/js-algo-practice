/*
Write an island counter for a 2D matrix. This function should return the number
of distinct islands present.

An island is a group of connected 1s (*vertically* or *horizontally* connected).
0 represents water. Islands are distinct if they are separate connected groups.

Examples

islandCounter([
  [1,1,0,0,0],
  [1,1,0,1,1],
  [0,0,0,1,1],
  [0,0,0,0,0],
  [1,1,0,0,1]
]) ➞ 4

islandCounter([
  [0,0,0],
  [0,0,0],
  [0,0,0]
]) ➞ 0
*/

function islandCounter(matrix) {
  let count = 0

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 1) {
        count++
        deleteIsland(matrix, r, c)
        console.log(matrix)
      }
    }
  }

  return count
}

const deleteIsland = (matrix, r, c) => {
  if (r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length || matrix[r][c] === 0) return

  matrix[r][c] = 0

  deleteIsland(matrix, r, c + 1) //rigth
  deleteIsland(matrix, r, c - 1) //left
  deleteIsland(matrix, r + 1, c) //up
  deleteIsland(matrix, r - 1, c) //down
}

const islands = islandCounter([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
])

console.log(islands)

exports.solution = islandCounter
