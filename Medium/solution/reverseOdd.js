/*
Reverse the Odd Length Words
Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used.
*/

function reverseOdd( sentence ) {
  //your code

  const words = sentence.split(' ')
  const res = []

  for (let word of words){
    if (!(word.length % 2 === 0)){
      const reversedWord = word.split('').reverse().join("")
      res.push(reversedWord)
    } else {
      res.push(word)
    }
  }

  return res.join(' ')
}

console.log(reverseOdd("Bananas"));

exports.solution = reverseOdd;