const suits = ["S", "H", "D", "C"];
const numbers = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
];
const deck = [];
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(numbers[i] + suits[j]);
  }
}

// Function to get card value
function getCardValue(card) {
  switch (card) {
    case "AS":
    case "AH":
    case "AD":
    case "AC":
      return "Ace";
    case "9S":
    case "9H":
    case "9D":
    case "9C":
      return 9;
    case "8S":
    case "8H":
    case "8D":
    case "8C":
      return 8;
    case "7S":
    case "7H":
    case "7D":
    case "7C":
      return 7;
    case "6S":
    case "6H":
    case "6D":
    case "6C":
      return 6;
    case "5S":
    case "5H":
    case "5D":
    case "5C":
      return 5;
    case "4S":
    case "4H":
    case "4D":
    case "4C":
      return 4;
    case "3S":
    case "3H":
    case "3D":
    case "3C":
      return 3;
    case "2S":
    case "2H":
    case "2D":
    case "2C":
      return 2;
    default:
      return 10;
  }
}

// Function to calculate score
function getScore(cards) {
  let score = 0;
  let hasAce = false;

  for (let card of cards) {
    const cardValue = getCardValue(card);

    if (cardValue === "Ace") {
      hasAce = true;
      score += 11; // Assuming 11 for Ace, you may need logic to handle 1 or 11 based on the total score.
    } else {
      score += cardValue;
    }
  }

  // If the hand has an Ace and the score is over 21, adjust for the Ace
  if (hasAce && score > 21) {
    score -= 10; // Subtract 10 to treat the Ace as 1 instead of 11
  }

  return score;
}

const newGame = document.getElementById("start");
const hitButton = document.getElementById("hit");
const stayButton = document.getElementById("stay");
let dealerArray = [];
let playerArray = [];

function startGame() {
  newGame.style.display = "none";
  hitButton.style.display = "block";
  stayButton.style.display = "block";
  // Initialize the deck and other code..
  dealerArray = [];
  playerArray = [];

  let dealerCard = deck[Math.floor(Math.random() * deck.length)];
  let playerCard1 = deck[Math.floor(Math.random() * deck.length)];
  let playerCard2 = deck[Math.floor(Math.random() * deck.length)];
  const playerCard1Element = document.getElementById("pcard1");
  const playerCard2Element = document.getElementById("pcard2");
  playerCard1Element.src = `img/${playerCard1}.png`;
  playerCard2Element.src = `img/${playerCard2}.png`;
  const dealerCard1Element = document.getElementById("dcard1");
  dealerCard1Element.src = `img/${dealerCard}.png`;
  // Example: Calculate scores for the dealer and player hands
  dealerArray.push(dealerCard);
  playerArray.push(playerCard1, playerCard2);

  // Call getScore to calculate the initial scores
  const dealerScore = getScore(dealerArray);
  const playerScore = getScore(playerArray);

  console.log(`Dealer's Card: ${dealerCard}, Score: ${dealerScore}`);
  console.log(
    `Player's Card: ${playerCard1} ${playerCard2}, Score: ${playerScore}`
  );
}
hitButton.addEventListener("click", () => {
  const randomCard = deck[Math.floor(Math.random() * deck.length)];
  playerArray.push(randomCard);

  // Calculate the player's score after adding a card
  const updatedPlayerScore = getScore(playerArray);
  if (updatedPlayerScore > 21) {
    newGame.style.display = "block";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
    console.log("Dealer Win");
  }
  // const playerCardsDiv = document.getElementById('player');
  // const cardImage=document.createElement('img')
  // cardImage.src=
  console.log(playerArray);
  // console.log(
  //   `Player's New Card: ${randomCard}, Updated Score: ${updatedPlayerScore} Dealer Card${playerArray}`
  // );
});

stayButton.addEventListener("click", () => {
  let dealerScore = getScore(dealerArray);
  const playerScore = getScore(playerArray);

  while (dealerScore < 17) {
    let randomCard = deck[Math.floor(Math.random() * deck.length)];
    dealerArray.push(randomCard);
    dealerScore = getScore(dealerArray);
  }
  const date = new Date();
  console.log(`Dealer Card ${dealerArray} ${date}`);

  if (dealerScore > 21 || dealerScore < playerScore) {
    console.log("Player Win");
    newGame.style.display = "block";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
  } else if (dealerScore === playerScore) {
    console.log("Draw");
    newGame.style.display = "block";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
  } else {
    console.log("Dealer Win");
    newGame.style.display = "block";
    hitButton.style.display = "none";
    stayButton.style.display = "none";
  }
});

newGame.addEventListener("click", startGame);
