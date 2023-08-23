'use strict';
var highScore = 0,
  score = 20;
let ip;
let num = Math.floor(Math.random() * (20 - 1 + 1) + 1);

document.querySelector('.check').addEventListener('click', function () {
  ip = Number(document.querySelector('.guess').value);
  console.log(ip);
  if (ip === num) {
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    document.querySelector('.message').textContent = '🎉correct answer';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = num;
  } else if (ip > num) {
    document.querySelector('.message').textContent = 'too high';
    document.querySelector('.guess').value = '';
    score -= 1;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'too low';
    document.querySelector('.guess').value = '';
    score -= 1;
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  num = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
});
