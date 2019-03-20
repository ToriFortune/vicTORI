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
  

alert("Welcome!");
alert("The goal of the game is to count up to but not above 35, let's begin!");
var fruitchoice = new Array ();
var fruits =["img-apple", "img-banana", "img-peach", "img-pear"];
var fruitvalues =["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];

function getfruitchoice()
{
  var fruitchoice = new Array();
  for (var i=0; i< fruits.length; i++)
  {   
   
  for (var x=0; x <fruitvalues.length; x++)
  { 
  var fruit = {FruitValue: fruitvalues[x], Fruits: fruits [i] };
  fruitchoice.push (fruit);
}
}
return fruit;
}
//we should have our array of fruit choices with forty fruit objects.




