// class Score {
//   constructor(id, name, score) {
//     this.id = id;
//     this.name = name;
//     this.score = score;
//   }

//   /* data that overrides the API */
//   scoreData = [
//     {
//       id: 1,
//       name: 'Fede',
//       score: 21,
//     },
//     {
//       id: 1,
//       name: 'Fran',
//       score: 22,
//     },
//     {
//       id: 1,
//       name: 'Lu',
//       score: 23,
//     },
//     {
//       id: 1,
//       name: 'Yiye',
//       score: 24,
//     },
//   ]

//   getScoreUser = () => {
//     const scoreListContainer = document.getElementById('scoreList');
//     scoreListContainer.innerHTML =
// this.scoreData.map((e) => `<li class="score-item">${e.name} : ${e.score}</li>`).join('');
//   }

//   addingNewScore = ({ name, scoreNumber }) => {
//     this.scoreData.push({
//       id: this.scoreData.length + 1,
//       name,
//       score: scoreNumber,
//     });
//     this.getScoreUser();
//   }
// }

class Score {
  constructor() {
    this.scoreData = [];
  }

  getScoreUser() {
    const scoreListContainer = document.getElementById('scoreList');
    scoreListContainer.innerHTML = this.scoreData.map((e) => `<li class="score-item">${e.name} : ${e.score}</li>`).join('');
  }

  addingNewScore(name, scoreNumber) {
    const newScore = {
      id: this.scoreData.length + 1,
      name,
      score: scoreNumber,
    };
    this.scoreData.push(newScore);
    this.getScoreUser();
  }
}

export default Score;