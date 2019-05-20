import React, { Component } from 'react';
import './components/styles/app.css';
import Board from "./components/board";

class App extends Component {
  //This is the main Game component where we contain rows of buttons
  //and maintain a state determining whose turn it is, and handle click
  //logic for buttons pressed.
  
  constructor(props) {
    super(props);

    this.state = {
      player: 1,
      squares: [null, null, null, null, null, null, null, null, null],
      victory: null
    }
  }

  componentDidUpdate() {
  this.checkForVictory();
  }

  handleClick = (i, player) => {
    this.setState((state => (this.state.squares.splice(i, 1, player))))
    if(this.state.player === 1) {
      this.setState(state => ({player: 2}))
    } else {
      this.setState(state => ({player: 1}))
    };
  }

  checkForVictory = () => {
    const board = this.state.squares;

    if (
      (board[0] === "X" && board[1] === "X" && board[2] === "X") ||
      (board[3] === "X" && board[4] === "X" && board[5] === "X") ||
      (board[6] === "X" && board[7] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[3] === "X" && board[6] === "X") ||
      (board[1] === "X" && board[4] === "X" && board[7] === "X") ||
      (board[2] === "X" && board[5] === "X" && board[8] === "X") ||
      (board[0] === "X" && board[4] === "X" && board[8] === "X") ||
      (board[2] === "X" && board[4] === "X" && board[6] === "X") 
    ) {
        console.log("Player 1 Victory!");
      }
    else if (
      (board[0] === "O" && board[1] === "O" && board[2] === "O") ||
      (board[3] === "O" && board[4] === "O" && board[5] === "O") ||
      (board[6] === "O" && board[7] === "O" && board[8] === "O") ||
      (board[0] === "O" && board[3] === "O" && board[6] === "O") ||
      (board[1] === "O" && board[4] === "O" && board[7] === "O") ||
      (board[2] === "O" && board[5] === "O" && board[8] === "O") ||
      (board[0] === "O" && board[4] === "O" && board[8] === "O") ||
      (board[2] === "O" && board[4] === "O" && board[6] === "O") 
    ) {
        console.log("Player 2 Victory!");
      }
  }

  render() {
    return (
      <div className="app">
      <h1>Tic Tac Toe Exercise</h1>
      <p> Player {this.state.player}'s Turn! </p> 
        <Board 
        handleClick={this.handleClick}
        player={this.state.player}
        />
      </div>
    );
  }
}

export default App;
