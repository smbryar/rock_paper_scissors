import React from 'react';
import RPS from './RPSDisplay';
import Tic from './tictactoe';
import './index.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: "RPS"
    };
  }

  getGame() {
    if (this.state.game === "RPS") {
      return <RPS id="rock-paper-scissors" />;
    }
    else if (this.state.game === "Tic") {
      return <Tic />;
    }
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <button className="nav-button" onClick={() => this.handleClick("RPS")}>Rock Paper Scissors</button>
          <button className="nav-button" onClick={() => this.handleClick("Tic")}>Tic-Tac-Toe</button>
        </nav>
        {this.getGame()}
      </div>);
  }


handleClick(i) {
  this.setState({
    game: i
  });
}
}