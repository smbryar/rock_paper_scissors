import React from 'react';
import './App.css';
import * as GameLogic from './GameLogic';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfGames: 0,
      numOfWins: 0,
      numOfLosses: 0,
      numOfDraws: 0
    };
  }

  //What happens when person chooses rock/paper/scissors
  handleClick(i) {
    const humanChoice = i;
    const compChoice = GameLogic.compRandomChoice();
    const result = GameLogic.compareChoices(humanChoice, compChoice);
    this.updateStats(result);
    this.setState((oldState) => {
      return {
        ...oldState,
        humanChoice,
        compChoice,
        result,
      };
    })
  }

  updateStats(result) {
    if (result === "win") {
      this.setState((oldState) => {
        return {
          ...oldState,
          numOfWins: this.state.numOfWins + 1,
          numOfGames: this.state.numOfGames + 1,
        };
      });
    }
    else if (result === "lose") {
      this.setState((oldState) => {
        return {
          ...oldState,
          numOfLosses: this.state.numOfLosses + 1,
          numOfGames: this.state.numOfGames + 1,
        };
      });
    }
    else if (result === "draw") {
      this.setState((oldState) => {
        return {
          ...oldState,
          numOfDraws: this.state.numOfDraws + 1,
          numOfGames: this.state.numOfGames + 1,
        };
      });
    }
  }

  render() {
    return (

      <div>
        <button onClick={() => this.handleClick("rock")}>Rock</button>
        <button onClick={() => this.handleClick("paper")}>Paper</button>
        <button onClick={() => this.handleClick("scissors")}>Scissors</button>

        <div>
          <p>You have played {this.state.numOfGames} games.</p>
          <p>You have won {this.state.numOfWins} times, lost {this.state.numOfLosses} times and drawn {this.state.numOfDraws} times.</p>
          <p>You have chosen {this.state.humanChoice}.</p>
          <p>Computer has chosen {this.state.compChoice}.</p>
          <p>The result is you {this.state.result}.</p>
        </div>
      </div>

    );
  }
}

export default App;
