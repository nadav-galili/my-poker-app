import React, { Component } from "react";
import { apiUrl } from "../config/config.json";
import gameService from "../services/gameService ";

class LastGame extends Component {
  state = {
    players: [],
    date: "",
  };
  async componentDidMount() {
    const { data } = await gameService.getLastGame();
    this.setState({ players: data });
    this.setState({ date: data[0].date });
  }

  render() {
    const { players } = this.state;
    let { date } = this.state;
    let rank = 1;

    return (
      <div className="container ">
        <div className="datelast text-center">
          <h2>משחק אחרון</h2>
          <h3>{date.slice(0, 10)}</h3>
        </div>

        <table className="myTable" border="2px solid black">
          <thead>
            <tr>
              <td className="p-2">מיקום</td>
              <td className="p-2">שחקן</td>
              <td></td>
              <td>רווח</td>
              <td>מספר פריטות</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.name}>
                <td>{rank++}</td>
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
