/*
Write a function that returns true if you can partition an array into one element and the rest,
such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition( arr ) {
  //your code
  arr.sort((a,b) => a - b)
  console.log(arr);
  console.log(arr.slice(0, arr.length-1))

  const lastElement = arr[arr.length - 1]
  const mulBeforeLast = arr.slice(0, arr.length-1).reduce((acc, a) => acc * a, 1)

  const firstElement = arr[0]
  const mulAfterFirst = arr.slice(1, arr.length).reduce((acc, a) => acc * a, 1)

  if (lastElement === mulBeforeLast){
    return true
  } else if (firstElement === mulAfterFirst){
    return true
  } else {
    return false
  }
  
}

exports.solution = canPartition;