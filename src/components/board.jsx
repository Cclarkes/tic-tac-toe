import React, { Component } from "react";
import "./styles/board.css";
import Row from "./row"

class Board extends Component {
    //Here I am creating a single board that houses 3 row components

    
render() {
    return(
        <div className="Board">
        <Row handleClick={this.props.handleClick}
        player={this.props.player}
        />
        <Row handleClick={this.props.handleClick}
        player={this.props.player}
        />
        <Row handleClick={this.props.handleClick}
        player={this.props.player}
        />
        </div>
    )
}
}

export default Board;