const newGame = document.getElementById("start");
const hitButton = document.getElementById("hit");
const stayButton = document.getElementById("stay");

function startGame() {
  newGame.style.display = "none";
  hitButton.style.display = "block";
  stayButton.style.display = "block";

  // Add your game logic here
}

newGame.addEventListener("click", startGame);
