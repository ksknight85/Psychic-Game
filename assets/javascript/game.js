// VARIABLES
// ====================================

var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alreadyGuessed = [];
var computerGuess;
var userGuess;

// FUNCTIONS
// ====================================

//  Function to render computer letter

function compPickLetter() {
    computerGuess = guessOptions[Math.floor(Math.random() * guessOptions.length)];
    console.log(computerGuess);

}

// Function to render wins
function win() {
    wins++;
    document.getElementById("winstext").textContent = "Wins: " + wins;
    reset();
    compPickLetter();
    alert("I bet you can't do that again!")
}
// function to render losses
function lose() {
    losses++;
    document.getElementById("lossestext").textContent = "Losses: " + losses;
    reset();
    compPickLetter();
    alert("HAHA.  I have bested you. \n\n Try agian!!")


}
// function to render incorrect guess
function incorrect() {
    alreadyGuessed.push(userGuess);
    document.getElementById("guessesmadetext").textContent = "Guesses made: " + alreadyGuessed;
    guessLeft--;
    document.getElementById("guesseslefttext").textContent = "Guesses left: " + guessLeft;
}

// function for reset
function reset() {
    alreadyGuessed = [];
    guessLeft = 10;
    document.getElementById("guesseslefttext").textContent = "Guesses left: " + guessLeft;
    document.getElementById("guessesmadetext").textContent = "Guesses made: ";

}


//  MAIN PROCESS
// ====================================
compPickLetter();
alert("I'm thinking of a letter in the alphabet. You have 10 guesses....Go!")


document.onkeyup = function (event) {
    userGuess = event.key;
    if (guessOptions.includes(userGuess) && !alreadyGuessed.includes(userGuess)) {

        if (userGuess === computerGuess) {
            alert("Congratulations! The letter was: " + computerGuess)
            win();
            return;
        }

        if (guessLeft === 1) {
            lose();

        }

        else {
            incorrect();

        }
    }

    else {
        alert("Please choose a letter A-Z, that you have not chosen already.");
    }
};
