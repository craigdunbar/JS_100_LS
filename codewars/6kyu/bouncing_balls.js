/*
# -----------------------INSTRUCTIONS------------------------

A child is playing with a ball on the nth floor of a tall building. 
The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), 
to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her 
window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, 
otherwise return -1.

# --------------------------PROBLEM--------------------------
# Input: 3 integers

# Output: integer

# ---------------------------RULES---------------------------
# Explicit: The ball can only be seen if the height of the rebounding ball 
is strictly greater than the window parameter.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).

# -----------------ALGO and Data Structure ------------------
w must be less than h
h must be greater than 0
bounce must be > 0 < 1

the height after the bounce is h * b => 3 * 0.66 = 1.98 
if this is still above window continue
next height is 1.98 * 0.66 = 1.3
this is less than window so break
number of bounces here is 3

need a counter to track bounces
*/
function bouncingBall(h, b, w) {
  if (h <= 0 || w > h || b >= 1 || b < 0) return -1;
  let count = 0;
  
  while(true) {
    count += 1
    h = h * b 
    if (h <= w) {
      break;
    } else {
      count += 1;
    }
  }
  return count;
}

console.log(bouncingBall(3.0, 0.66, 1.5)) //, 3);
console.log(bouncingBall(30.0, 0.66, 1.5)) //, 15);
console.log(bouncingBall(3.0, 1.0, 1.5)) //, -1);