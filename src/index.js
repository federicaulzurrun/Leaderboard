import './style.css';
import Score from './modules/score.js';

const newScore = new Score();
const addScoreForm = document.querySelector('.addScoreForm');

addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name-input');
  const scoreInput = document.getElementById('score-input');

  const name = nameInput.value;
  const scoreNumber = Number(scoreInput.value);

  if (name && scoreNumber) {
    newScore.addingNewScore(name, scoreNumber);

    nameInput.value = '';
    scoreInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  newScore.getScoreUser();
});
