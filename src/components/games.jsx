import React, { Component } from "react";
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
    let { players } = this.state;
    players[playerId - 1].selected = true;
    console.log(players[playerId - 1]);
    this.setState({ players });
  }

  render() {
    const { players } = this.state;

    return (
      // <Players players={players}/>
      <div className="col-md-6 col-lg-4 col-xl-3 mt-3">
        {players.map((player) => (
          <div className="card" key={player.id}>
            <div className="card-body">
              <h5 className="card-title">{player.id}</h5>
              <p className="card-text">{player.name}</p>
              <p className="card-text">{player.selected ? "true" : "false"}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.selectPlayer(player.id)}
              >
                Add player
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Games;
