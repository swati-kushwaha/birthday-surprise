let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns
  [0,4,8], [2,4,6]           // diagonals
];

function makeMove(cell, index) {
  if (board[index] === "" && gameActive) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      gameActive = false;
      showMessage(`🎉 ${currentPlayer} wins! Happy Birthday Bhaiya! You’re a true champ! 🏆🎂`);
    } else if (!board.includes("")) {
      gameActive = false;
      showMessage("😄 It's a draw! But you still win the best gift: My Love! 💖");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  return winConditions.some(combination => {
    const [a, b, c] = combination;
    return board[a] !== "" && board[a] === board[b] && board[a] === board[c];
  });
}

function showMessage(text) {
  const msg = document.getElementById("message");
  msg.textContent = text;
  msg.classList.remove("hidden");
}
