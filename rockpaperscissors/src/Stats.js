import React from 'react';

export default class Stats extends React.Component {
    render() {
        if (this.props.numOfGames > 0) {
            return (
                <div className="results">
                    <p>You chose <b>{this.props.humanChoice}</b> and the computer chose <b>{this.props.compChoice}</b>. This means you <b>{this.props.result}</b>.</p>
                    <p>You have won {this.props.numOfWins} times, lost {this.props.numOfLosses} times and drawn {this.props.numOfDraws} times.</p>
                    <p>Your win percentage is {Math.round(100*this.props.numOfWins / this.props.numOfGames)}%.</p>
                </div>
            );
        }
        else { return (
            <div className = "invite">
                <p>Choose your weapon!</p>
            </div>
        ) };
    }
}