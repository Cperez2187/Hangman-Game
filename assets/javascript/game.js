//**************************
//	Create playGame object
//**************************

var playGame = {

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
			formattedWord + = gameLetters[i];

			if (i != letters.length - 1) {
				formattedWord += " ";
			}
		}
		return formattedWord;
	}

	// Updates and displays "word-display" in html
	outputWordLetters: function() {
		document.getElementById("word-display").innerHTML = gameFormatWord(gameLetters);
	}

	// Updates and displays guessed letters in html
	outputUsedLetters: function() {
		document.getElementById("guessed").innerHTML = gameFormatWord(usedLetters);
	}

}


















