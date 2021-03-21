import React, { Component } from "react";

class PlayerTable extends Component {
  state = {};
  handleChange = (e) => {
    this.props.player.cashInHand = e.target.value;
    this.props.changeInput(this.props.player);
  };

  render() {
    const { player, addCashing } = this.props;

    return (
      <tr key={player.id}>
        <td>{player.selected && player.id}</td>
        <td>{player.selected && player.name}</td>

        <td>
          {player.selected && (
            <button type="button" onClick={() => addCashing(player.id)}>
              add cashing
            </button>
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
      </tr>
    );
  }
}

export default PlayerTable;
