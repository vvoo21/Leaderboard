import './style.css';
import addScore from './modules/addScore.js';
import getScores from './modules/getScores.js';

const form = document.querySelector('.form');
const refreshBtn = document.querySelector('.refresh-btn');

form.addEventListener('submit', addScore);
refreshBtn.addEventListener('click', getScores);
