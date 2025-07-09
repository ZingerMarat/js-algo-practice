/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed( text ) {
  //your code

  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < text.length; i++){
    if (vowel.includes(text[i])){
      text = text.slice(0, i) + '-' + text[i] + '-' + text.slice(i+1, text.length)
      i++
    }
  }

  return text
}

exports.solution = dashed;