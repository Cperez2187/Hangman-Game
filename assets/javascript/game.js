//**************************
//	Create playGame object
//**************************

var hangman = {

	//~~~~~~~~~~~~~~
	// Properties
	//~~~~~~~~~~~~~~
	totalGuesses: 9,
	guessesRemaining: 9,
	wordBag: [],  // holds all available words for the game
	word: "",
	images: [],  // Holds all the hangman images
	gameLetters: [],  // Holds formatted word for displaying
	usedLetters: [],
	gameOver: false,

	//~~~~~~~~~~~~~
	// Methods
	//~~~~~~~~~~~~~
	
	// Adds spaces between letters for display purposes
	gameFormatWord: function(letters) {
		var formattedWord = "";

		for (var i = 0; i < gameLetters.length; i++) {
			formattedWord += gameLetters[i];

			if (i != letters.length - 1) {
				formattedWord += " ";
			}
		}
		return formattedWord;
	},

	// Updates and displays "word-display" in html
	outputWordLetters: function() {
		document.getElementById("word-display").innerHTML = gameFormatWord(gameLetters);
	},

	// Updates and displays guessed letters in html
	outputUsedLetters: function() {
		document.getElementById("guessed").innerHTML = gameFormatWord(usedLetters);
	},

	// Check if user has guessed all the correct letters
	checkWin: function() {
		for (var i = 0; i < gameLetters.length; i++) {
			if (gameLetters[i] === "_") {
				return false; // Still missing letters
			}
		}
		return true;  // All letters have been guessed
	},

	// Checks if the key is an actual letter
	isLetter: function(key) {
		let invalidKeys = ["Enter", "Meta", "Control", "Alt", "CapsLock", "Shift",
		 "ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"];

		let alphabet = /^[a-zA-Z]+$/i;

		return alphabet.test(key);
	},

}


















