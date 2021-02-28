import React, { Component } from "react";
// import Player from "./player";
import Players from "./players";
// import DayPicker from "./common/date-picker";
import http from "../services/httpService";
import { apiUrl } from "../config/config.json";
import axios from "axios";

class Games extends Component {
  state = {
    players: [],
  };

  getPlayers = async () => {
    axios.get(`${apiUrl}/players`).then((response) => {
      console.log(response.data);
      this.setState({ players: response.data });
    });
  };

  selectPlayer(playerId) {
    const { players } = this.state;
    players[playerId - 1].selected = !players[playerId - 1].selected;
    this.setState({ players });
  }

  addCashing = (playerId) => {
    let { players } = this.state;
    players[playerId - 1].cash += 50;
    console.log(players);
    this.setState({ players });
  };

  render() {
    const { players } = this.state;

    return (
      <div className="container">
        <button type="button" onClick={this.getPlayers}>
          Get players
        </button>
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
                <td>{player.selected && player.player_name}</td>
                <td>{player.selected && "In the game"}</td>
                <td>
                  {player.selected && (
                    <button
                      onClick={() => this.addCashing(player.id)}
                      className="btn btn-secondary"
                    >
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
