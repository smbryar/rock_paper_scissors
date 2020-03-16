import React from 'react';
import * as GameLogic from './GameLogic';
import Stats from './Stats';
import './RPSDisplay.css';

export default class RPS extends React.Component {
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
      <div className="wrap">

        <div className="interface">

          <div className="buttons">
            <button className="button rock" onClick={() => this.handleClick("rock")}>Rock</button>
            <button className="button paper" onClick={() => this.handleClick("paper")}>Paper</button>
            <button className="button scissors" onClick={() => this.handleClick("scissors")}>Scissors</button>
          </div>
          <Stats numOfGames={this.state.numOfGames} numOfWins={this.state.numOfWins} numOfLosses={this.state.numOfLosses} numOfDraws={this.state.numOfDraws} humanChoice={this.state.humanChoice} compChoice={this.state.compChoice} result={this.state.result} />
        </div>

      </div>

    );
  }
}