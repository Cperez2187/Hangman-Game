//**********************************
//	Global variables && Functions
//**********************************

var gameOver = false;

// Checks if the key is an actual letter
function isLetter(key) {
	let invalidKeys = ["Enter", "Meta", "Control", "Alt", "CapsLock", "Shift",
	 "ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"];

	let alphabet = /^[a-zA-Z]+$/i;

	return alphabet.test(key);
}

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
		let formattedWord = "";

		for (var i = 0; i < letters.length; i++) {
			formattedWord += letters[i];

			if (i != letters.length - 1) {
				formattedWord += " ";
			}
		}
		return formattedWord;
	},

	// Updates and displays "word-display" in html
	outputWordLetters: function() {
		document.getElementById("word-display").innerHTML = this.gameFormatWord(this.gameLetters);
	},

	// Updates and displays guessed letters in html
	outputUsedLetters: function() {
		document.getElementById("guessed").innerHTML = this.gameFormatWord(this.usedLetters);
	},

	// Check if player has guessed all the correct letters
	checkWin: function() {
		for (var i = 0; i < this.gameLetters.length; i++) {
			if (this.gameLetters[i] === "_") {
				return false; // Still missing letters
			}
		}
		return true;  // All letters have been guessed
	},

	// Grabs a random word from wordBag
	randomWord: function() {
		this.word = this.wordBag[Math.floor(Math.random() *this.wordBag.length)];
		// word = wordBag[Math.floor(Math.random() * wordBag.length)];
	},

	playGame: function(key) {
		// If game is not over and player pressed a letter
		if (!gameOver && isLetter(key)) {
			// If Letter is in the word
			if (this.word.includes(key)) {
				//replace corresponding underscore in gameLetters with letter
				for (var i = this.word.indexOf(key); i < this.word.length; i++) {
					if (this.word.charAt(i) === key) {
						this.gameLetters[i] = String(key);
					}
				}
				this.outputWordLetters();

				// Check if player has won
				if (this.checkWin()) {
					alert("YOU WIN!, No one had to die.");
					console.log("Player has won");
					gameOver = true;
				}
			// if letter is not in word
			} else {
				

			}


		}
		else if (gameOver) {

		}

	}
};

//****************
//	Play Game
//****************

do {
	// Sets 'word' attribute = random word from 'wordBag'
	hangman.randomWord();
	console.log("Word: " + hangman.word);

	// Fills 'gameLetters' array with underscores representing missing letters of word
	for (var i = 0; i < hangman.word.length; i++) {
		hangman.gameLetters.push("_");
	}

	// Display empty word spaces
	hangman.outputWordLetters();
	hangman.outputUsedLetters();
	console.log("usedLetters: " + hangman.usedLetters);

	document.onkeydown = function keyUp(event) {

	}
	gameOver = true;
} while (gameOver === false);


















