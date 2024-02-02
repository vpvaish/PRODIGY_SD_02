// JavaScript code for the guessing game

// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const resultMessage = document.getElementById('result');
    const attemptsMessage = document.getElementById('attempts');

    // Check if the input is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    // Increment attempts
    attempts++;

    // Compare the user's guess with the secret number
    if (userGuess == secretNumber) {
        resultMessage.textContent = `Congratulations! You guessed the correct number (${secretNumber}) in ${attempts} attempts.`;
        attemptsMessage.textContent = '';
    } else if (userGuess < secretNumber) {
        resultMessage.textContent = 'Too low! Try again.';
        attemptsMessage.textContent = `Attempts: ${attempts}`;
    } else {
        resultMessage.textContent = 'Too high! Try again.';
        attemptsMessage.textContent = `Attempts: ${attempts}`;
    }
}