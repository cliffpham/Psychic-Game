var compChoices = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var wins = 0;
var losses = 0;
var turns = 10;
var userGuesses = [];
// var userSelect = document.getElementById("userGuess");


//Game Starts on Key Press

document.onkeyup = function(event) {
    var userGuess = event.key;
    var compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];



    if (userGuess == compChoice) {
        //reset game if won
        wins++;
        console.log("You won");
        winDisplay.textContent = wins;
        turns = 10;
        turnLeftDisplay.textContent = turns;
    } else if (userGuess !== compChoice){
        turns--;
        turnLeftDisplay.textContent = turns;
        userGuesses.push(userGuess);
        guess.textContent = userGuesses;
    }; 
    
        //if turns run out add loss and reset game
    if  (turns === 0) {
        losses++;
        turns = 10;
        lossDisplay.textContent = losses;
        userGuesses = [];
        console.log("you lost");
    }
};








