import displayScores from './displayScores.js';

const getScores = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/miKeCVnfMltmQcmqMBh6/scores/';
  const response = await fetch(url);
  const json = await response.json();
  const arrscore = json.result;
  displayScores(arrscore);
};

export default getScores;