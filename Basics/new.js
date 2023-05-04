//Guess number game

function guessNumber() {
  let isPlaying = true;
  alert(`You have 10 attempts to guess the number`);
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 10;
  score = 0;
  while (isPlaying) {
    let userGuess = parseInt(prompt("Guess a number between 1 and 10"));
    if (userGuess === randomNumber) {
      score += 1;
      alert("You got it right!");
    } else if (userGuess > randomNumber) {
      attempts -= 1;
      alert(`Too high! You have ${attempts} attempts left`);
      if (attempts === 0) {
        isPlaying = false;
        alert(`You ran out of guesses! The number was ${randomNumber}`);
      }
    } else if (userGuess < randomNumber) {
      attempts -= 1;
      alert(`Too low! You have ${attempts} attempts left.`);
      if (attempts === 0) {
        isPlaying = false;
        alert(`You ran out of guesses! The number was ${randomNumber}`);
      }
    }
    if (attempts === 0 || userGuess === randomNumber) {
      let playAgain = prompt("Would you like to play again? y or n?");
      if (playAgain === "y") {
        guessNumber();
      } else if (playAgain === "n") {
        alert(`Thanks for playing!Your score is ${score}`);
        break;
      }
    }
  }
}
// guessNumber();
