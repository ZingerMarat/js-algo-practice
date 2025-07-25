/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

Examples
numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]
Notes
The strings can contain white spaces or any type of characters.
Bonus: Try solving this without regex.
*/

function numInStr( arr ) {
  //your code
  const result = []

  arr.forEach((elem) => {
    for (let l of elem){
      if(parseInt(l)){
        result.push(elem)
        return
      }
    }
  })

  return result
}

console.log(numInStr(["this IS", "10xYZ", "xy2K77", "Z1K2W0", "xYz"]) );

exports.solution = numInStr;