/*
# -----------------------INSTRUCTIONS------------------------
After Midnight (Part 2)
As seen in the previous exercise, the time of day can be represented 
as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, 
and return the number of minutes before and after midnight, respectively. 
Both functions should return a value in the range 0..1439.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 
Both functions should return a value in the range 0..1439.
You may not use javascript's Date class methods.

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
# ----------------------------ALGO---------------------------
# to get the number of minutes after midnight 
hours * 60 + minutes
to get the number of minutes before midnight 
must get number of minutes to next hour and aadd that to number of hours until midnight
eg. 12:34 is 26 minutes til 13:00 
13:00 is 11 hours to mignight
11*60 + 26 === 686
*/

// function afterMidnight(str) {
//   let timeArr = str.split(':');
//   let hours = Number(timeArr[0]);
//   let minutes = Number(timeArr[1]);
//   let minutesAterMidnight = (hours * 60) + minutes;
//   return minutesAterMidnight === 1440 ? 0 : minutesAterMidnight;
// }

// function beforeMidnight(str) {
//   let timeArr = str.split(':');
//   let hours = Number(timeArr[0]);
//   let minutes = Number(timeArr[1]);
//   let minutesToNextHour = 60 - minutes;
//   let hoursToMidnight = 24 - (hours + 1);
//    let minutesBeforeMidnight = (hoursToMidnight * 60) + minutesToNextHour;
//    return minutesBeforeMidnight === 1440 ? 0 : minutesBeforeMidnight
// }
// Further explotation
const MINUTES_PER_DAY = 1440;

function afterMidnight(string) {
  let time = new Date(`June 19, 2022 ${string}:00`);
  return (time.getHours() * 60) + time.getMinutes();
}

function beforeMidnight(string) {
  return (MINUTES_PER_DAY - afterMidnight(string)) % MINUTES_PER_DAY;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);