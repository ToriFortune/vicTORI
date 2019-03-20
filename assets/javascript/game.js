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
// var numberOptions = [9, 8, 7, 6, 5, 4, 3, 2, 1];
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
// a player should be able to click on a fruit and have a random number associated on click
//upon each click, a player shhould be alerted to the points for each click event
//each click should equal a random number
//points awarded per click should continue to tally up to 87
//players will get alert "You went over, try again" when summation of click points is over 87
//game should reset upon player losing without refreshing

var fruitChoice = new Array();
var fruitOptions = ["apple", "banana", "peach", "cherry"];
var FruitValues = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
var score= 0;
var targetNumber =87;
totalFruitValue= 
function getfruitchoice()
{
 //  var fruitchoice = new Array();
//   for (var i=0; i< fruits.length; i++);
  // console.log(fruitChoice);
}
$(document).ready(function(){
  $("#clickapple").on("click", function (){
    var random=Math.floor(Math.random() * (120-19) +1) +19;
  })};


$(document).ready(function() {

   $("#clickapple").on("click", function() {
    alert("You have 'so many' points");
  });

});
$(document).ready(function() {
  
  $("#clickpeach").on("click", function() {
    alert("You have 'so many' points!");
  });

});
$(document).ready(function() {
$("#clickbanana").on("click", function() {
  alert("You have 'so many' points!");
});
});

$(document).ready(function() {
$("#clickcherry").on("click", function() {
  alert("You have 'so many' points!");
});
});
