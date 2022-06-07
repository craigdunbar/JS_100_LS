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
function timeOfDay(num) {
  const  MINS_PER_DAY = 1440;
  const MINS_PER_HOUR = 60;

  given_minutes = (num % MINS_PER_DAY);
  given_minutes = given_minutes < 0 ? (given_minutes += MINS_PER_DAY) : given_minutes;

  hours = Math.floor(given_minutes / MINS_PER_HOUR);
  mins = Math.floor(given_minutes % MINS_PER_HOUR);

  return (`${hours.toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')}`)
}
console.log(timeOfDay(0)); // === "00:00");
console.log(timeOfDay(-3)); // === "23:57");
console.log(timeOfDay(35)); // === "00:35");
console.log(timeOfDay(-1437)); // === "00:03");
console.log(timeOfDay(3000)); // === "02:00");
console.log(timeOfDay(800)); // === "13:20");
console.log(timeOfDay(-4231)); // === "01:29");