
Computer AI defense
If the player has 2 squares in a row then there is an
immediate threat and the computer should occupy the third
square.
Looking at the winningLines constant:
const winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // coumns
  [1, 5, 9], [3, 5, 7]            // diagonal
];
Example Player has [1, 2] then computer takes [3]
This would be represented as: 
      board[sq1] === HUMAN_MARKER 
      board[sq2] === HUMAN_MARKER 
      board[sq3] === ININTIAL_MARKER

The threat combos are [1, 2], [1, 3], [2, 3]
Therefore we need to loop through the winning_lines array to look for these combinations
If the the combinations are found then the empty square should be assigned the computer marker
If it's not found then the computer should choose as square randomly as before.
function computerDefense(board) {
for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER && board[sq3] === INITIAL_MARKER) {
          board[sq3] = COMPUTER_MARKER;
      } else if (board[sq1] === HUMAN_MARKER && board[sq3] === HUMAN_MARKER & board[sq2] === INITIAL_MARKER) {
          board[sq2] = COMPUTER_MARKER;
      } else if (board[sq2] === HUMAN_MARKER && board[sq3] === HUMAN_MARKER & board[sq1] === INITIAL_MARKER) {
          board[sq2] = COMPUTER_MARKER;
      } else {
        computerChoosesSquare(board)
      }
    }
  }
}

Computer AI attack
This is very similar to the defensive funciton.
the only difference is that the function should look for 
the the array to contain 2 COMPUTER_MARKERs instead of 
HUMAN_MARKERS and if it finds them then the element that 
contains the INITIAL_MARKER shoul be assigned to the 
COMPUTER_MARKER

function computerOffense(board) {
for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER && board[sq3] === INITIAL_MARKER) {
          board[sq3] = COMPUTER_MARKER;
      } else if (board[sq1] === COMPUTER_MARKER && board[sq3] === COMPUTER_MARKER & board[sq2] === COMPUTER_MARKER) {
          board[sq2] = COMPUTER_MARKER;
      } else if (board[sq2] === COMPUTER_MARKER && board[sq3] === COMPUTER_MARKER & board[sq1] === INITIAL_MARKER) {
          board[sq2] = COMPUTER_MARKER;
      } else {
        computerChoosesSquare(board)
      }
    }
  }
}