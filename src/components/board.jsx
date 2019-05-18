import React, { Component } from "react";
import "./styles/app.css";
import Tile from "./tile"

class Board extends Component {
    //Here I am creating a single board that houses all tile components
    render() {
        return(
            <div className="Board">
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
                <Tile handleClick={this.props.handleClick}
                    player={this.props.player}
                />
            </div>
        )
    }
}
export default Board;