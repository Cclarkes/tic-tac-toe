import React, {Component} from "react";
import Tile from "./tile"

class Row extends Component {
//Here each row contains 3 tiles 

// [X, O, X]
// [X, X, X]
// [O, O, X]

//If the values in each index of row 1,2 or 3 all === "x" or "o" then victory
// row1.reduce(( => {
// }))
//If the values in index 0 of rows 1,2 and 3 all == "x " or "o" then victory
//If the values in index 0 on row 1, index 1 on row 2, inde



    render() {
        return(
            <div className="row">
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
export default Row;