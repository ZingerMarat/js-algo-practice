/*
Write a function that connects each previous word to the next word by the shared letters.
Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/

function join(words) {
  //your code
  let minShared = Infinity
  let shared = 0
  let result = words[0]
  let first = 0
  let second = 0
  let firstWord = words[0]
  const answer = []

  for (let i = 0; i < words.length - 1; i++) {
    const secondWord = words[i + 1]

    while (first < firstWord.length) {
      if (firstWord[first] === secondWord[second]) {
        shared++
        first++
        second++
      } else {
        first++
      }
    }

    result = result + secondWord.slice(second)
    firstWord = secondWord
    minShared = minShared < shared ? minShared : shared

    first = 0
    second = 0
    shared = 0
  }

  answer.push(result, minShared)
  //console.log(answer)
  return answer
}

join(["oven", "envier", "erase", "serious"])
join(["move", "over", "very"])
join(["to", "ops", "psy", "syllable"])

exports.solution = join
