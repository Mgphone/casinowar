// var suits=["♠️","♥️","♣️","♦️"];
var suits = ["S", "H", "D", "C"];
var number = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
var deck = [];

// for(i=0;i<suits.length;i++){
//   // console.log(suits[i]);
//   for(j=0;j<number.length;j++){
//     deck.push(suits[i]+number[j]);
//   }
// }

// var dealerCard=deck[Math.floor(Math.random()*deck.length)];
// var playerCard=deck[Math.floor(Math.random()*deck.length)];
// $(".Dealer-Hit").on("click",function(){
//   $(".DealerCard").html(dealerCard);
// });
// $(".Player-Hit").on("click",function(){
//   $(".PlayerCard").html(playerCard);
// });

// function checkingValue(){
//   if (parseInt(dealerCard)>parseInt(playerCard))
//   {
//     console.log("Dealer Win");
//   }
//   else
//   console.log("Player Win");
// }

for (i = 0; i < number.length; i++) {
  for (j = 0; j < suits.length; j++) {
    deck.push(number[i] + suits[j]);
  }
}
var dealerCard = deck[Math.floor(Math.random() * deck.length)];
var playerCard = deck[Math.floor(Math.random() * deck.length)];
// var Dealercard=number[Math.floor(Math.random()*13)]+suits[Math.floor(Math.random()*4)];
// var Playercard=number[Math.floor(Math.random()*13)]+suits[Math.floor(Math.random()*4)];
$(".Dealer-Hit").on("click", function () {
  $(".DealerCard").html("<img src=img/" + dealerCard + ".png>");
});
$(".Player-Hit").on("click", function () {
  $(".PlayerCard").html("<img src=img/" + playerCard + ".png>");
  $(".winning").text(checkingValue());
});
$(".newGame").click(function () {
  location.reload();
});

function checkingValue() {
  if (deck.indexOf(dealerCard) > deck.indexOf(playerCard)) {
    return "Player 2 Win";
  } else if (deck.indexOf(playerCard) > deck.indexOf(dealerCard)) {
    return "Player 1 Win";
  } else {
    return "Draw";
  }
}
