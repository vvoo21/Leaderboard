import './style.css';
import addScore from './modules/addScore.js';
import Interface from './modules/interface.js';

const form = document.querySelector('.form');

form.addEventListener('submit', addScore);

window.addEventListener('load', () => {
  Interface.displayScore();
});
