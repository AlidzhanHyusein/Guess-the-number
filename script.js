'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Selects Element by class/Id
console.log(document.querySelector('.message').textContent);

// Changing the class message to something else!

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// Getting the value if we have input and changeing it

// document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);

// Click event / Code React

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // it changes when i click the button with class check

  // document.querySelector('.message').textContent = 'Correct Number!';

  // if guess is FALSE we change the class with .message to No Number

  if (!guess) {
    //When there is no input

    displayMessage('Not a number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number');

    // Changing the color
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      displayMessage('You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
