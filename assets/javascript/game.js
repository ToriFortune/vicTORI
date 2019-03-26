// As a user, I should see instructions of how to play.
// As a user, I should be presented with the target number for winning the game.
// As a user, I should be able to click on an item and see my score increase by a determined but unknown amount.
// As a user, I should see that I won the game when my score matches the random number chosen at the beginning.
// As a user, I should see that I lost the game when my score goes over the random number chosen at the beginning.
// As a user, I should be able to play a new game when I win or lose the current game.
// As a user, I should be presented with a new target number for each game.
// As a user, I should know how many times I won and lost the game.
// As a user, I should see instructions of how to play.
// As a user, I should be presented with the target number for winning the game.
// As a user, I should be able to click on an item and see my score increase by a determined but unknown amount.
// As a user, I should see that I won the game when my score matches the random number chosen at the beginning.
// As a user, I should see that I lost the game when my score goes over the random number chosen at the beginning.
// As a user, I should be able to play a new game when I win or lose the current game.
// As a user, I should be presented with a new target number for each game.
// As a user, I should know how many times I won and lost the game.
// var fruits =
// var targetNumber = 87;
// $("magic-number").text(targetNumber);
// var counter = 0
// var numberOptions = [12,11,10,9, 8, 7, 6, 5, 4, 3, 2, 1];
// for (var i=0; i<numberOptions.length; i++)
// var increment = numberOptions[Math.round(Math.random())];
// $(".img apple").on("click", function() {
//     alert("You clicked an apple!");
//   });
  // alert("Welcome!");
// alert("We have selected a random number between 1 - 120. Let's if you can guess it!");
// //Math.floor(Math.random() * 100) + 1; 
// var fruitchoice = new Array ();
// var fruits =["img-apple", "img-banana", "img-peach", "img-pear"];
// var fruitvalues =["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var score=0
// function getfruitchoice()
// {
//   var fruitchoice = new Array();
//   for (var i=0; i< fruits.length; i++);
//   {   
   
//   for (var x=0; x <fruitvalues.length; x++);
//   { 
//   var fruit = {FruitValue: fruitvalues[x], Fruits: fruits [i] };
//   fruitchoice.push (fruit);
// }
// }
// return fruit;
// }
//we should have our array of fruit choices with forty fruit objects (fruits * fruitvalues).



//Thought process
//a player should be able to click on a fruit and have a random number associated on click
//upon each click, a player should be alerted to the points for each click event
//each click should equal a random number
//points awarded per click should continue to tally up to 87
//players will get alert "You went over, try again" when summation of click points is over 87
//game should reset upon player losing without refreshing

// var fruitChoice = new Array();
var fruitOptions = [
  {name: "apple", value:0 }, 
  {name: "banana", value:0}, 
  {name: "peach", value:0},
  {name: "cherry", value:0}
];
// var apple= 12;
// var banana= 10
// var peach= 8
// var cherry = 6
// var FruitValues = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var score= 0;
var targetNumber =87;
// var counter;
// var randomFruitSelection =

function getRandomNumber() {
 return Math.floor(Math.random() * 12) + 1; 
}

function startGame() {
  score=0; 
  $("#magic-number").text(score);
  for (var i= 0; i< fruitOptions.length; i++){
    fruitOptions[i].value =getRandomNumber();
  }
}

function checkTargetNumber () {
  if (score===targetNumber){
    alert("You win!");
    startGame();
  }
  else if (score > targetNumber){
    alert("Try again!")
    startGame();
  }

}
// function getfruitchoice()
// {
//  //  var fruitchoice = new Array();
// //   for (var i=0; i< fruits.length; i++);
//   // console.log(fruitChoice);
// }

// var body =document.querySelector("body"); ----I was trying something unrelated out but it didn't work out
// var isBlue = false;
// setInterval(function(){
//   if (isBlue){
//     body.style.background = "blue";
//       }
//       else {
//         body.style.background ="#3498db";
//       }
//       isBlue =!isBlue;
// }, 1000);
// var y = (FruitValues + counter)
 
// //function is equal to 87
// function isEqual (targetNumber){
  
$(document).ready(function() {
  startGame();

   $(".btn").on("click", function() {
    var fruit = $(this).attr("id");
    for (var i= 0; i< fruitOptions.length; i++){
      if(fruitOptions[i].name === fruit){
        score += fruitOptions[i].value;
        $("#magic-number").text(score);  
        checkTargetNumber();
      }
    }
  });

});
// $(document).ready(function() {
  
//   $("#clickpeach").on("click", function() {
//     alert("You have 'so many' points!");
//   });

// });
// $(document).ready(function() {
// $("#clickbanana").on("click", function() {
//   alert("You have 'so many' points!");
// });
// });

// $(document).ready(function() {
// $("#clickcherry").on("click", function() {
//   alert("You have 'so many' points!");
// });
// });
// if (fruitChoices === targetNumber)
// return true;
// }
// else{
//   return false;
// }
// 