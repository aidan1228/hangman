var inquirer = require('inquirer');

var word = require('./word.js');

var wordArray = ['LAUGHTER', 'LOVE', 'SCHEMA', 'CASHOUT', 'DEATHNOTE', 'IPHONE', 'REALONE', 'NOBODY', 'CHOSEN'];

var randomWord = Math.floor(Math.random() * wordArray.length);

var currentWordLetters = new word(wordArray, randomWord).chosenWord;

var currentWordStart = new word(wordArray, randomWord).wordString();

var charGuess = "D";

var currentWord = new word(wordArray, randomWord).charGuesses(charGuess);
// console.log(currentWordLetters);

console.log(currentWord);


//Stores Guessed Letters
var guessedLetters = [];
//Stores Correctly Guessed Letters
var correctLetters = [];
//Total Guesses
var guessesLeft = 10;

function startGame(){
    inquirer.prompt([
        {
            type: "list",
            message: "Welcome to my Hangman! Make a selection: ",
            choices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            name: 'Selection'
        }
    ]).then(function(user){
        guessedLetters.push(user.Selection);
        console.log("Letter Guessed: " + user.Selection);
		console.log("Guessed Letters: " + guessedLetters);

		
        if (currentWordLetters.includes(user.Selection)){

            console.log(user.Selection + "'s in there!");
            charGuess = user.Selection;
            console.log("CurrentWord: " + currentWord);
            //Store in Correct Guessed Letters
            correctLetters.push(user.Selection);
            charGuess = "";
            guessesLeft--;
            console.log("Guesses Left: " + guessesLeft);
            contHang();
            
        }
        else {
            console.log(user.Selection + "'s not in there!");
            guessesLeft--;
            console.log("Guesses Left: " + guessesLeft);

            contHang();
        }

        console.log("Guessed letters: " + guessedLetters);
 		console.log("Correct letters: " + correctLetters);
    })
    
}

// startGame();

function contHang() {
    var letterGuess = [];

	console.log("Guessed Letters: " + guessedLetters);    
    inquirer.prompt([
		{
			type: 'list',
			message: 'Select another Letter to Guess the Word',
			choices: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
			name: "Selection"
		}

		]).then(function(user) {
            console.log("Current Word: " + currentWord);
			//Storing letters to array
			guessedLetters.push(user.Selection);

			console.log("Letter Guess: " + user.Selection);
			console.log("Guessed Letters: " + guessedLetters);
            console.log("Correct Letters: " + correctLetters);
            
            if (guessesLeft === 0){
                var reveal = "";
                for(var i = 0; i < currentWordLetters.length; i++){
                    reveal += currentWordLetters[i];

                }
				console.log("Sorry. You did not guess the word.");
				console.log("The Word was: " + reveal);
            }
            else if (currentWord.includes(guessedLetters)){
				console.log("Great job!");
				console.log("The correct letter was: " + currentWord);
            }
            else if (currentWord.includes(user.Selection)) {

				//Confirmation
				console.log(user.Selection + "'s in there!");
				guessesLeft--;
				correctLetters.push(user.Selection);

				contHang();
            }
            else {
                console.log(user.Selection + "'s not in there!");
                guessesLeft--;
                contHang();
            }
        })
}
