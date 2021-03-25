import React, { Component } from "react";

class PlayerTable extends Component {
  state = {};
  handleChange = (e) => {
    this.props.player.cashInHand = e.target.value;
    this.props.changeInput(this.props.player);
  };

  render() {
    const { player, addCashing, undoCashing } = this.props;

    return (
      <tr key={player.id}>
        {/* <td>{player.selected && player.id}</td> */}
        <td>{player.selected && player.name}</td>

        <td>
          {player.selected && (
            <p className="pt-3">
              <i
                className="fas fa-money-bill-wave text-success mr-1"
                onClick={() => addCashing(player.id)}
              ></i>
              הוסף פריטה
            </p>
          )}
        </td>
        <td>{player.selected && player.cashing}</td>
        <td>
          <input type="number" onChange={this.handleChange} />
        </td>
        <td>
          <i>
            <b>{player.cashInHand - player.cashing}</b>
          </i>
        </td>
        <td>
          <p className="pt-3">
            <i
              className="fas fa-undo-alt text-danger mr-1"
              onClick={() => undoCashing(player.id)}
            ></i>
            בטל פריטה
          </p>
        </td>
      </tr>
    );
  }
}

export default PlayerTable;
