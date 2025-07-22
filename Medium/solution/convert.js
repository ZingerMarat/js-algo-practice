/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convert(arg) {
  //your code
  const scale = arg.slice(-2)
  const temp = parseInt(arg.slice(0, -2))

  if (isNaN(temp)) {
    return "Error"
  }

  if (scale === "°C") {
    return Math.round(temp * (9 / 5) + 32) + "°F"
  } else if (scale === "°F") {
    return Math.round((temp - 32) * (5 / 9)) + "°C"
  }

  return "Error"
}

console.log(convert("35°C"))

exports.solution = convert
