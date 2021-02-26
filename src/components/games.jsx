import React, { Component } from "react";
// import Player from "./player";
import Players from "./players";
// import DayPicker from "./common/date-picker";

class Games extends Component {
  state = {
    players: [
      { id: 1, name: "Bibs", selected: false },
      { id: 2, name: "Vasili", selected: false },
      { id: 3, name: "Rami", selected: false },
      { id: 4, name: "Asad", selected: false },
    ],
  };

  selectPlayer(playerId) {
    const { players } = this.state;
    players[playerId - 1].selected = !players[playerId - 1].selected;
    this.setState({ players });
  }

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

        <table border="3">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>selected</td>
              <td>button</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.selected && player.id}</td>
                <td>{player.selected && player.name}</td>
                <td>{player.selected && "In the game"}</td>
                <td>{player.selected && <button>add 50</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Games;
