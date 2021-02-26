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

    players[playerId - 1].selected = true;
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
      </div>
    );
  }
}

export default Games;
