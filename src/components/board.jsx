import React, { Component } from "react";
import "./styles/app.css";
import Tile from "./tile"

class Board extends Component {
    //Here I am creating a single board that houses all tile components
constructor(props) {
    super(props);

this.createSquare = this.createSquare.bind(this);
}
    createSquare = (i) => {
        return <Tile value={i} player={this.props.player} handleClick={this.props.handleClick}/>
      }

    render() {
        return(
            <div className="board">
                {this.createSquare(0)}
                {this.createSquare(1)}
                {this.createSquare(2)}
                {this.createSquare(3)}
                {this.createSquare(4)}
                {this.createSquare(5)}
                {this.createSquare(6)}
                {this.createSquare(7)}
                {this.createSquare(8)}
            </div>
        )
    }
}
export default Board;