var gameOn = ['long john silver', 'blackbeard', 'jack sparrow', 'captain hook', 'calico jack', 'captian kidd', 'captain morgan', 'madame cheng'];
var wordToGuess = ""; //word to guess
var lettersInWord = []; //letters in each word
var correctGuess = []; //letter guessed correctly
var incorrectGuess = []; //letter guessed incorrectly
var wins = 0;
var loss = 0;
var spaces = 0; //spaces in words
var guessesLeft = 12; //guesses user has left
//var clue = ['long john silver clue', 'blackbeard clue', 'jack sparrow clue', 'captain hook clue', 'calico jack clue', 'captain kidd clue', 'captain morgan clue', 'madame cheng clue']; //sentence that describes each words

//resets game
  //Pick a words
  function PickWord() {
    guessesLeft = 12;
    wordToGuess = gameOn[Math.floor(Math.random() * gameOn.length)];
    lettersInWord = wordToGuess.split("");
    spaces = lettersInWord.length;

    console.log(wordToGuess);

    incorrectGuess = [];
    correctGuess = [];

    //show blank spaces for words
    for (var i = 0; i < spaces; i++) {
      correctGuess.push("_");
    }
    console.log(correctGuess);

    document.getElementById('remainingGuesses').innerHTML = ("GUESSES LEFT: " + guessesLeft);
    document.getElementById('currentWord').innerHTML = ("CURRENT WORD: " + correctGuess);
    document.getElementById('UsersGuesses').innerHTML = ("LETTERS GUESSED: " + incorrectGuess);
  }

  //if player guesses correct letter, show letters in spaces and letters guessed
  function playerGuesses(letter) {
    var lettersInWord = false;
    for (var i = 0; i < spaces; i++) {
      if (wordToGuess[i] === letter) {

        lettersInWord = true;
      }
    }
    if (lettersInWord) {
      for (var t = 0; t < spaces; t++) {
        if (wordToGuess[t] === letter) {
          correctGuess[t] = letter;
        }
      }
      console.log(correctGuess);
    }

    else {
      incorrectGuess.push(letter);
      guessesLeft--;
    }
  }

  //if player guesses word before player runs out of guesses add one wins play happy pirate music
  function calculate() {
    document.getElementById('remainingGuesses').innerHTML =("GUESSES LEFT: " + guessesLeft);
    document.getElementById('UsersGuesses').innerHTML = ("LETTERS GUESSED: " + incorrectGuess.join(" "));
    document.getElementById('currentWord').innerHTML = ("CURRENT WORD: " + correctGuess.join(" "));
    if (lettersInWord.toString() === correctGuess.toString()) {
      wins++;
      document.getElementById('wins').innerHTML = ("WINS: " + wins);
      alert('YO HO HO!!!');
      PickWord();
    }
    //if player runs out of guesses before winning add one losses play dangerous pirate music
    else if (guessesLeft === 0) {
      loss++;
      document.getElementById('loss').innerHTML = ("LOSSES: " + loss);
      alert('ARGHHH Hang im from the yard arm');
      PickWord();
    }
  }

  PickWord();

  document.onkeyup = function (event) {
    var chosenLetter = String.fromCharCode(event.keyCode).toLowerCase();
    playerGuesses(chosenLetter);
    calculate();
  };
