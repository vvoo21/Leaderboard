class Interface {
  static displayScore() {
    const newScore = JSON.parse(localStorage.getItem('scores')) || [];
    newScore.forEach(score => Interface.createScore(score));
  }

  static createScore(score) {
    const scoreWrap = document.querySelector('.score-wrap');

    const tr = document.createElement('tr')
    scoreWrap.appendChild(tr);

    const name = document.createElement('td');
    name.innerHTML = score.userName
    name.classList.add('.td');
    tr.appendChild(name);

    const scoreUser = document.createElement('td');
    scoreUser.innerHTML = score.userScore
    scoreUser.classList.add('.td');
    tr.appendChild(scoreUser);

  }
}

export default Interface;