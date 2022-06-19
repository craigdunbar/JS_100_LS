/*
# -----------------------INSTRUCTIONS------------------------
After Midnight (Part 1)
The time of day can be represented as the number of minutes before 
or after midnight. If the number of minutes is positive, the time 
is after midnight. If the number of minutes is negative, 
the time is before midnight.

Write a function that takes a time using this minute-based format 
and returns the time of day in 24 hour format (hh:mm). 
Your function should work with any integer input.


# --------------------------PROBLEM--------------------------

# Input: integer
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 
You may not use javascript's Date class methods.

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
# ----------------------------ALGO---------------------------
# since there are 1440 minutes in a day
we can calculate the time by adding or subtrating 1440 from the integer 
if the integer is positive find the result of integer % 1440
divide this result by 60 to get the hour. Multiply any number after the dp 
by 60 to get the minutes
*/
// function timeOfDay(num) {
//   const  MINS_PER_DAY = 1440;
//   const MINS_PER_HOUR = 60;

//   given_minutes = (num % MINS_PER_DAY);
//   given_minutes = given_minutes < 0 ? (given_minutes += MINS_PER_DAY) : given_minutes;

//   hours = Math.floor(given_minutes / MINS_PER_HOUR);
//   mins = Math.floor(given_minutes % MINS_PER_HOUR);

//   return (`${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}`)
// }

// further exploration from LS student solutions

// to use the date object we need to speciify the current date
// then convert the given number into the day and time that corresponds to the 
// current date plus or minus the given minutes.
// then convert that date into the required hour and minute format also adding the day for clarity

function formatDateOutput(date) {
  let days = [
    'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
  ];

  let day = String(days[date.getDay()]);
  let hour = String(date.getHours());
  let minute = String(date.getMinutes());

  return `${day} ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;
}

function timeOfDay(number) {
  const MILLISECONDS_PER_MINUTE = 60000;
  const REFERENCE_TIME = (new Date ('June 19, 2022 00:00:00').getTime());

  let date = new Date(REFERENCE_TIME + number * MILLISECONDS_PER_MINUTE);
  return formatDateOutput(date);
}
console.log(timeOfDay(0)); // === "00:00");
console.log(timeOfDay(-3)); // === "23:57");
console.log(timeOfDay(35)); // === "00:35");
console.log(timeOfDay(-1437)); // === "00:03");
console.log(timeOfDay(3000)); // === "02:00");
console.log(timeOfDay(800)); // === "13:20");
console.log(timeOfDay(-4231)); // === "01:29");