import React, { Component } from "react";
import { apiUrl } from "../config/config.json";
import gameService from "../services/gameService ";

class LastGame extends Component {
  state = {
    players: [],
  };
  async componentDidMount() {
    const { data } = await gameService.getLastGame();

    this.setState({ players: data });
  }

  render() {
    const { players } = this.state;

    return (
      <div className="container ">
        <h2>Last Game</h2>
        <h2>
          {new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear()}
        </h2>
        <table className="table">
          <thead>
            <tr>
              <td>Game Rank</td>
              <td>Name</td>
              <td>img</td>
              <td>Profit</td>
              <td>Pritot Number</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.name}>
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + `images/${player.name}.jpg`}
                    alt=""
                    className="lastgame"
                  />
                </td>
                <td>{player.profit}</td>
                <td>{player.num_of_pritot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LastGame;
