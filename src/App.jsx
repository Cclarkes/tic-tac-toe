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
    turn: true,
    player: 1
  }

  this.handleClick = this.handleClick.bind(this);
}

  handleClick = (e) => {
    if(this.state.player === 1) {
      this.setState(state => ({player: 2}))
    } else {
      this.setState(state => ({player: 1}))
    };

    // this.checkTurn();
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
