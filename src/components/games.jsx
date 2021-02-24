import React, { Component } from "react";
import Players from "./players";
import DayPicker from "./common/date-picker";

class Games extends Component {
  state = {
    players: [
      { id: 1, name: "Bibs", selected: false },
      { id: 2, name: "Vasili", selected: false },
      { id: 3, name: "Rami", selected: false },
      { id: 4, name: "Asad", selected: false },
    ],
  };

  selectPlayer = (playerId) => {
    let players = this.state;
    players.map((p) => {
      if (playerId === p.id) p.selected = !p.selected;
      return p;
    });

    this.setState({ players });
  };
  render() {
    const { players } = this.state;

    return (
      <div>
        <Players
          players={players}
          addPlayer={() => this.selectPlayer(players.id)}
        />
        <DayPicker />
      </div>
    );
  }
}

export default Games;
