import React, { Component } from "react";
import GameTable from "./gameTable";
import Players from "./players";
import http from "../services/httpService";
import { apiUrl } from "../config/config.json";
// import axios from "axios";
import playersService from "../services/playersService";
import gameService from "../services/gameService ";
import PlayerTable from "./playersTable";

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
    players[playerId - 1].cashing += 50;

    this.setState({ players });
  };

  onInputChange = (e) => {
    let { players } = this.state;
    players[e.id - 1].cashInHand = e.cashInHand;
    this.setState({ players });
  };

  updateGame = async () => {
    let players = this.state.players;

    players = players.filter((player) => player.selected);

    players.map((player) => {
      player.profit = player.cashInHand - player.cashing;
      player.num_of_cashing = player.cashing / 50;

      this.setState({ players });

      return gameService.postGames(player);
    });
    await this.props.history.replace("/lastgame");
  };

  render() {
    const { players } = this.state;

    return (
      <div className="container mt-3">
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
          <GameTable />
          <tbody>
            {players.map((player) => (
              <PlayerTable
                key={player.id}
                player={player}
                addCashing={() => {
                  this.addCashing(player.id);
                }}
                changeInput={this.onInputChange}
                getId={this.getId}
              />
            ))}
          </tbody>
        </table>
        <button type="button" onClick={this.updateGame}>
          update
        </button>
      </div>
    );
  }
}

export default Games;
