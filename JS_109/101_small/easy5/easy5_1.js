/*
# -----------------------INSTRUCTIONS------------------------
Cute Angles
Write a function that takes a floating point number representing 
an angle between 0 and 360 degrees and returns a string representing 
that angle in degrees, minutes, and seconds. 
You should use a degree symbol (˚) to represent degrees, 
a single quote (') to represent minutes, and a double quote (") t
o represent seconds. 
There are 60 minutes in a degree, and 60 seconds in a minute.

# --------------------------PROBLEM--------------------------

# Input: float
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Decimal to DMS Example
For example, convert 47.31° to DMS.

Find the whole degrees:
47.31° = 47° + .31°
degrees = 47°

Find minutes:
minutes = .31 × 60 = 18.6′
minutes = 18′ + .6′
minutes = 18′

Find seconds:
seconds = .6′ × 60
seconds = 36″

Thus, 47.31° is equal to 47° 18′ 36″.
# ----------------------------ALGO---------------------------
# define a function with a floating poijnt integer as argument
initalise an empty string
convert the first two digits (degree digits) to strings and add to the empty string followed by °.
multiply the minute digits after the decimal point by 60
take the first two digits of the result and add to the string followed by '.
take the digites after the decimal point of the minutes calculation and mulitply by 60 to get the seconds
add these to the string
*/
function dms(num) {
// while loop to deal with numbers less than 1 or greater then 360
  while (num < 1 || num > 360) {
    if (num < 1){
      num = num + 360;
    } else if (num > 360) {
      num = num - 360
    }
  }

  let degrees = Math.floor(num);

  let minutes = (num - Math.floor(num)) * 60;
  let minutesRounded = Math.floor(minutes);
  if (String(minutesRounded).length < 2) {
    minutesRounded = '0' + String(minutesRounded);
  }

  let seconds = (minutes - Math.floor(minutes)) * 60;
  let secondsRounded = Math.floor(seconds);
  if (String(secondsRounded).length < 2) {
    secondsRounded = '0' + String(secondsRounded);
  }
  console.log(`${degrees}°${minutesRounded}'${secondsRounded}"`);
}

// Further exploration
// to deal with negative numbers use a while loop and if statements.

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"