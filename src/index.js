// importing necessary modules and files
import './style.css';
import Score from './modules/score.js';

// create a new Score object
const newScore = new Score();

/* get the form and add an event listener for submitting new scores */
const addScoreForm = document.querySelector('.addScoreForm');

addScoreForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get the input values for user and score
  const userInput = document.getElementById('name-input');
  const scoreInput = document.getElementById('score-input');

  // store the input values in variables
  const user = userInput.value;
  const scoreNumber = Number(scoreInput.value);

  // if both inputs values are present, add the new score and reset the form
  if (user && scoreNumber) {
    newScore.addingNewScore({ user, scoreNumber });

    userInput.value = '';
    scoreInput.value = '';
  }
});

// get the refresh button and add an event listener to fect new score data
const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', newScore.fetchResults);
// fetch the initial score data when the page is loaded
document.addEventListener('DOMContentLoaded', newScore.getScoreUser);