//*************************
//	Global variables
//*************************

var gameOver = false;

//**************************
//	hangman object
//**************************

var hangman = {
	//~~~~~~~~~~~~~~
	// Properties
	//~~~~~~~~~~~~~~
	totalGuesses: 9,
	guessesLeft: 9,
	wordBag: ["pig", "cow", "zebra", "lion", "animal", "sahara", "jungle"],  // holds all available words for the game
	word: "",  // Holds a word from wordBag
	// Array with hangman images
	images: ["assets/images/hangman_2.png", "assets/images/hangman_3.png", "assets/images/hangman_4.png",
			"assets/images/hangman_5.png", "assets/images/hangman_6.png", "assets/images/hangman_7.png", 
			"assets/images/hangman_8.png", "assets/images/hangman_9.png", "assets/images/hangman_10.png"], 
	gameLetters: [],  // Holds word for displaying
	usedLetters: [],
	wins: 0,
	losses: 0,

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

	// Grabs a random word from wordBag
	randomWord: function() {
		word = wordBag[2];
		// word = wordBag[Math.floor(Math.random() * wordBag.length)];
	},

	playGame: function(key) {

	},
};

//****************
//	Play Game
//****************

do {
	// Sets 'word' attribute = random word from 'wordBag'
	hangman.randomWord();

	// Fills 'gameLetters' array with underscores representing missing letters of word
	for (var i = 0; i < hangman.word.length; i++) {
		hangman.gameLetters.push("_");
	}

	// Display empty word spaces
	hangman.outputWordLetters();

	document.onkeydown = function keyUp(event) {

	}
} while (gameOver === false);


















