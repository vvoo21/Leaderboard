import Score from './score.js';
import Interface from './interface.js';

const addScore = (e) => {
  e.preventDefault();

  const newScore = JSON.parse(localStorage.getItem('scores')) || [];

  const userName = document.querySelector('.user-name').value;
  const userScore = document.querySelector('.user-score').value;

  const score = new Score(userName, userScore);

  newScore.push(score);

  localStorage.setItem('scores', JSON.stringify(newScore));

  e.target.reset();

  Interface.createScore(score);
};

export default addScore;