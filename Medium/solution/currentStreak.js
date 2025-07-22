/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak(today, dates) {
  if (dates.length === 0) return 0;

  const dateSet = new Set(dates.map(obj => obj.date));
  let streak = 0;
  let currentDate = new Date(today);

  while (dateSet.has(currentDate.toISOString().slice(0, 10))) {
    streak++;
    currentDate.setDate(currentDate.getDate() - 1);
  }

  return streak;
}

const ans = currentStreak("2019-09-23", [{"date":"2019-06-25"},{"date":"2019-06-28"},{"date":"2019-07-02"},{"date":"2019-07-07"},{"date":"2019-07-09"},{"date":"2019-07-12"},{"date":"2019-07-13"},{"date":"2019-07-14"},{"date":"2019-07-15"},{"date":"2019-07-16"},{"date":"2019-07-17"},{"date":"2019-07-25"},{"date":"2019-07-26"},{"date":"2019-07-29"},{"date":"2019-07-31"},{"date":"2019-08-03"},{"date":"2019-08-06"},{"date":"2019-08-07"},{"date":"2019-08-09"},{"date":"2019-08-12"},{"date":"2019-08-13"},{"date":"2019-08-14"},{"date":"2019-08-16"},{"date":"2019-08-17"},{"date":"2019-08-21"},{"date":"2019-08-22"},{"date":"2019-08-23"},{"date":"2019-08-24"},{"date":"2019-08-25"},{"date":"2019-08-26"},{"date":"2019-08-27"},{"date":"2019-08-28"},{"date":"2019-08-29"},{"date":"2019-08-30"},{"date":"2019-09-02"},{"date":"2019-09-03"},{"date":"2019-09-04"},{"date":"2019-09-05"},{"date":"2019-09-06"},{"date":"2019-09-08"},{"date":"2019-09-11"},{"date":"2019-09-12"},{"date":"2019-09-13"},{"date":"2019-09-15"},{"date":"2019-09-16"},{"date":"2019-09-17"},{"date":"2019-09-18"},{"date":"2019-09-20"},{"date":"2019-09-22"},{"date":"2019-09-23"}])
console.log(ans);


exports.solution = currentStreak;