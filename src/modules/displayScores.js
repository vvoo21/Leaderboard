function displayScores(data) {
  const scoreWrap = document.querySelector('.score-wrap');

  scoreWrap.innerHTML = '';

  data.forEach((scoreList) => {
    const { user, score } = scoreList;

    const tr = document.createElement('tr');
    scoreWrap.appendChild(tr);

    const name = document.createElement('td');
    name.innerHTML = `${user}`;
    name.classList.add('.td');
    tr.appendChild(name);

    const scoreUser = document.createElement('td');
    scoreUser.innerHTML = `${score}`;
    scoreUser.classList.add('.td');
    tr.appendChild(scoreUser);
  });
}

export default displayScores;