import React, { Component } from "react";
// import Player from "./player";
import Players from "./players";
// import DayPicker from "./common/date-picker";
import http from "../services/httpService";
import { apiUrl } from "../config/config.json";
// import axios from "axios";
import playersService from "../services/playersService";
import gameService from "../services/gameService ";
import { LinearProgress } from "@material-ui/core";

class Games extends Component {
  state = {
    players: [],
  };

  async componentDidMount() {
    const { data } = await playersService.getPlayers();
    // console.log(data);
    this.setState({ players: data });
  }

  selectPlayer(playerId) {
    const { players } = this.state;
    players[playerId - 1].selected = !players[playerId - 1].selected;
    this.setState({ players });
  }

  addCashing = (playerId) => {
    let { players } = this.state;
    players[playerId - 1].cashing += 50;
    this.setState({ players });
  };

  onInputChange = (event, playerId) => {
    console.log(event.target.value, playerId);
    let { players } = this.state;
    players[playerId - 1].cashInHand = event.target.value;
    console.log(players);
    this.setState({ players });
  };

  updateGame = () => {
    let players = this.state.players;
    players = players.filter((player) => player.selected);

    // players.sort(function (a, b) {
    //   return a.profit - b.profit;
    // });

    // let game_rank = 1;
    // for (let i = 0; i < players.length; i++) {
    //   if (i > 0 && players[i].profit < players[i - 1].profit) {
    //     game_rank++;
    //   }
    //   players[i].game_rank = game_rank;
    // }

    players.map((player) => {
      player.profit = player.cashInHand - player.cashing;
      player.num_of_cashing = player.cashing / 50;

      this.setState({ players });

      return gameService.postGames(player);
    });
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
        <button type="button" onClick={this.updateGame}>
          update
        </button>
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
                <td>{player.selected && player.cashing}</td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => this.onInputChange(e, player.id)}
                  />
                </td>

                <td>
                  <b>
                    <i>{player.cashInHand - player.cashing}</i>
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

              <td>
                <b>
                  {players.reduce((prev, cur) => {
                    return prev + cur.cashing;
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
