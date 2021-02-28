import React, { Component } from "react";
// import Player from "./player";
import Players from "./players";
// import DayPicker from "./common/date-picker";

class Games extends Component {
  state = {
    players: [
      { id: 1, name: "Bibs", selected: false, cash: 0 },
      { id: 2, name: "Vasili", selected: false, cash: 0 },
      { id: 3, name: "Rami", selected: false, cash: 0 },
      { id: 4, name: "Asad", selected: false, cash: 0 },
    ],
  };

  selectPlayer(playerId) {
    const { players } = this.state;
    players[playerId - 1].selected = !players[playerId - 1].selected;
    this.setState({ players });
  }

  addCashing = (playerId) => {
    let { players } = this.state;
    players[playerId - 1].cash += 50;
    this.setState({ players });
  };

  render() {
    const { players } = this.state;

    return (
      <div className="container">
        <div className="row">
          {players.map((player) => (
            <Players
              key={player.id}
              player={player}
              selectPlayer={() => {
                this.selectPlayer(player.id);
              }}
            />
          ))}
        </div>

        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>selected</td>
              <td>button</td>
              <td>total</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.selected && player.id}</td>
                <td>{player.selected && player.name}</td>
                <td>{player.selected && "In the game"}</td>
                <td>
                  {player.selected && (
                    <button onClick={() => this.addCashing(player.id)}>
                      add 50
                    </button>
                  )}
                </td>
                <td>{player.selected && player.cash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Games;
