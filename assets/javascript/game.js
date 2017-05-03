//**********************************
//	Global variables && Functions
//**********************************

var gameOver = false;

// Checks if the key is an actual letter
function isLetter(key) {
	let result = false;

	let invalidKeys = ["Enter", "Meta", "Control", "Alt", "CapsLock", "Shift",
	 "ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"];

	let alphabet = /^[a-zA-Z]+$/i;
	
	// Check if key matches alphabet
	result = alphabet.test(key);

	// Check for invalid keys
	for (var i = 0; i < invalidKeys.length; i++) {
		if (key === invalidKeys[i]) {
			result = false;
		}
	}

	return result;
}


//**************************
//	hangman object
//**************************

var hangman = {
	//~~~~~~~~~~~~~~
	// Properties
	//~~~~~~~~~~~~~~
	guessesLeft: 9,
	wordBag: ["pig", "cow", "zebra", "lion", "animal", "sahara", "jungle"],  // holds all available words for the game
	word: "",  // Holds a word from wordBag
	// Array with hangman images
	images: ["assets/images/hangman_10.png", "assets/images/hangman_9.png", "assets/images/hangman_8.png",
			"assets/images/hangman_7.png", "assets/images/hangman_6.png", "assets/images/hangman_5.png", 
			"assets/images/hangman_4.png", "assets/images/hangman_3.png", "assets/images/hangman_2.png", "assets/images/hangman_1.png"], 
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
		this.word = this.wordBag[Math.floor(Math.random() * this.wordBag.length)];
		// word = wordBag[Math.floor(Math.random() * wordBag.length)];
	},

	// Initializes and resets game after player wins or loses
	resetGame: function() {
		gameOver = false;
		this.guessesLeft = 9;
		// Empty gameLetters and usedLetters
		this.gameLetters = [];
		this.usedLetters = [];

		// Sets 'word' attribute = random word from 'wordBag'
		this.randomWord();
		console.log("Word: " + this.word);

		// Fills 'gameLetters' array with underscores representing missing letters of word
		for (var i = 0; i < this.word.length; i++) {
			this.gameLetters.push("_");
		}

		// Reset hangman image
		document.getElementById("hm-image").src = this.images[this.guessesLeft];
		
		// Display empty word spaces
		this.outputWordLetters();
		this.outputUsedLetters();
		document.getElementById("remaining").innerHTML = this.guessesLeft;

		document.getElementById("play").innerHTML = "GO AHEAD AND GUESS!";
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
					// Increment wins and display
					this.wins++;
					document.getElementById("wins").innerHTML = this.wins;

					gameOver = true;
					document.getElementById("play").innerHTML = "PRESS ANY KEY TO PLAY AGAIN!";
				}
			// if letter is not in word
			} else {
				// If letter has not been guessed (-1)
				if (this.usedLetters.indexOf(key) < 0) {
					// Decrement guessesLeft
					this.guessesLeft--;
					document.getElementById("remaining").innerHTML = this.guessesLeft;
					// Update hangman image
					document.getElementById("hm-image").src = this.images[this.guessesLeft];

					// Add the letter to the usedLetters[] and display
					this.usedLetters.push(key);
					this.outputUsedLetters();

					// Check if player lost
					if (this.guessesLeft === 0) {
						alert("YOU LOSE! Had you been smarter, this man might have lived. Damn you!");
						console.log("Player loses");
						// Increment losses and display
						this.losses++;
						document.getElementById("losses").innerHTML = this.losses;

						gameOver = true;
						document.getElementById("play").innerHTML = "PRESS ANY KEY TO PLAY AGAIN!";
					}
				}
			}
		}
		else {
			this.resetGame();
		}

	}
};

//****************
//	Play Game
//****************

hangman.resetGame();

document.onkeydown = function keyUp(event) {
	//Play game
	hangman.playGame(event.key);
}



















