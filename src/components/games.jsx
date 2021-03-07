import React, { Component } from "react";
// import Player from "./player";
import Players from "./players";
// import DayPicker from "./common/date-picker";
import http from "../services/httpService";
import { apiUrl } from "../config/config.json";
// import axios from "axios";
import playersService from "../services/playersService";

class Games extends Component {
  state = {
    players: [],
  };

  async componentDidMount() {
    const { data } = await playersService.getPlayers();

    this.setState({ players: data });
  }

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

  onInputChange = (event, playerId) => {
    console.log(event.target.value, playerId);
    let { players } = this.state;
    players[playerId - 1].cashInHand = event.target.value;
    console.log(players);
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
              <td></td>
              <td>Current cash</td>
              <td>Cash in hand</td>
              <td>Final profit/loss</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.selected && player.id}</td>
                <td>{player.selected && player.name}</td>
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
                <td>
                  <input
                    type="number"
                    onChange={(e) => this.onInputChange(e, player.id)}
                  />
                </td>

                <td>
                  <b>
                    <i>{player.cashInHand - player.cash}</i>
                  </b>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <b>
                  {players.reduce((prev, cur) => {
                    return prev + cur.cash;
                  }, 0)}
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Games;
