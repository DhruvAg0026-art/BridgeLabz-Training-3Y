// Generate a secret integer from 1 through 50; change userGuess to test the game.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27;

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const isVeryClose = Math.abs(userGuess - secretNumber) <= 3;

  if (isVeryClose && userGuess >= 1 && userGuess <= 50) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}

console.log(`Secret number: ${secretNumber}`);
