import getScores from './getScores.js';

const addScore = async (e) => {
  e.preventDefault();

  const user = document.querySelector('.user-name').value;
  const score = document.querySelector('.user-score').value;

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/miKeCVnfMltmQcmqMBh6/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

  e.target.reset();

  getScores();
};

export default addScore;