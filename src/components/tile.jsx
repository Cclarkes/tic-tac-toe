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
            this.props.player === 1 ?
                this.setState((state => ({textValue: "X"})))
                :
                this.setState((state => ({textValue: "O"})))

            this.setState((state => ({clicked: true})))
            this.props.handleClick();
        }
        console.log(this.state.textValue, this.state.clicked);
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