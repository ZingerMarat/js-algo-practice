/*
Return the coordinates ([row, col]) of the element that differs from the rest.

Examples
whereIsWaldo([
 ["A", "A", "A"],
 ["A", "A", "A"],
 ["A", "B", "A"]
]) ➞ [ 2, 1]

whereIsWaldo([
 ["c", "c", "c", "c"],
 ["c", "c", "c", "d"]
]) ➞ [1, 3]

whereIsWaldo([
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["P", "O", "O", "O"],
 ["O", "O", "O", "O"]
]) ➞ [4, 0]
Notes
Rows and columns are 0-indexed.
*/

function whereIsWaldo( matrix) {
  //your code

  const map = new Map()

  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      map.has(matrix[i][j]) ? map.get(matrix[i][j]).push([i,j]) : map.set(matrix[i][j], [[i,j]])
    }
  }

  for (let elem of map){
    if (elem[1].length === 1){
      const answer = elem[1][0]
      return answer;
    }    
  }

}

console.log(whereIsWaldo([
 ["A", "A", "A"],
 ["A", "A", "A"],
 ["A", "B", "A"]
]))



exports.solution = whereIsWaldo;
