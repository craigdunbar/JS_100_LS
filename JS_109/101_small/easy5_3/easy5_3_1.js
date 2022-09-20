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

# Input: 
# Output: 
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


# ----------------------------ALGO---------------------------
# multiply the numbers after the decimal point by 60 to get the minutes
multiply the numbers after the decimal point of the minutes calculation by 60 to get the seconds
ie dms = 76.73
76 is degrees
.73 * 60 = 43.8 // minutes
0.8 * 60 = 48 // seconds
so result is 76°43'48"
*/
function dms(num) {
  let degrees = Math.floor(num)
  let minutes = (num - degrees) * 60
  let minutesRounded = Math.floor(minutes);
  let seconds = Math.floor((minutes - minutesRounded) * 60);
  
  console.log(`${degrees}°${String(minutesRounded).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`);
}
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"