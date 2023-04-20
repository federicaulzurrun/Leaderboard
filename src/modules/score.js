// define the class
class Score {
  constructor(user, score) {
    // inicialize the user and score parameters
    this.user = user;
    this.score = score;
  }

  /* define the API endpoint URL as a class property */
  apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/URWOPQXPpdyBILkLKoCv/scores/';

  /* create an empty array to store the input data */
  apiDataInput = [];

  /* define a function to render the scores on the DOM */
  getScoreUser() {
    const scoreListContainer = document.getElementById('scoreList');
    scoreListContainer.innerHTML = this.apiDataInput.map((e) => `<li class="score-item">${e.user} : ${e.score}</li>`).join('');
  }

  /* define an async function to fetch the score from the API */
  fetchResults = async () => {
    try {
      const dataApi = await fetch(this.apiUrl);
      const response = await dataApi.json();
      this.apiDataInput = [];
      response.result.map((e) => this.apiDataInput.push(e));
      return this.getScoreUser();
    } catch (err) {
      return err;
    }
  };

  /* define an async function to add new scores to the API */
  addingNewScore = async ({ user, scoreNumber }) => {
    try {
      const configData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score: scoreNumber }),
      };

      const dataApi = await fetch(this.apiUrl, configData);
      const response = await dataApi.json();
      this.apiDataInput.push(response);
      return this.fetchResults();
    } catch (err) {
      return err;
    }
  };
}

// export the score class
export default Score;