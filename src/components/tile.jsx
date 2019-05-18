import React, {Component} from "react";

class Tile extends Component {
    constructor(props){
        super(props)
    this.state = {
        player: this.props.player,
        turn: this.props.turn,
        clicked: false,
    }
}


    //Here we have a single square that reacts to click events.
    render() {
        return(
            <button className="square" onClick={this.props.handleClick}>
            <p className="clicked?">Click!</p>
            </button>
        )
    }
}

export default Tile;