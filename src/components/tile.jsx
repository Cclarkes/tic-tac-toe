import React, {Component} from "react";
import "./styles/app.css"

class Tile extends Component {
    constructor(props){
        super(props)

        this.state = {
            player: this.props.player,
            textValue: "",
            clicked: false,
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked = () => {
        if(this.state.clicked === false) {
            if(this.props.player === 1) {
                this.setState({textValue: "X", clicked: true})
                console.log(this.state.textValue);
                this.props.handleClick(this.props.value, "X")
            } else {
                this.setState({textValue: "O", clicked: true})
                console.log(this.state.textValue);
                this.props.handleClick(this.props.value, "O")
            }
        }
    }

    //Here we have a single square that reacts to click events.
    render() {
        return(
            <div className="square" onClick={this.clicked}>
            <p className="clicked?">{this.state.textValue}</p>
            </div>
        )
    }
}

export default Tile;