import React, { Component } from "react";
import { apiUrl } from "../config/config.json";
import tableService from "../services/tableService";
import GamesData from "./gamesData";
import { Ripple } from "react-preloaders";

class Table extends Component {
  state = {
    table: [],
    loading: true,
  };
  async componentDidMount() {
    const { data } = await tableService.getTable();
    this.setState({ loading: false });
    this.setState({ table: data[1] });
  }

  render() {
    const { table } = this.state;
    let rank = 1;

    return (
      <div className="container mt-3 ">
        <h1>League Table</h1>
        <img
          src={process.env.PUBLIC_URL + `images/logo-cup.jpeg`}
          className=" logo-cup"
          alt="logo-cup"
        />

        <h2>
          {" "}
          {new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear()}
        </h2>

        <div className="table-responsive">
          <table className="myTable" border="3px solid black">
            <thead className="bg-primary">
              <tr>
                <td>מקום</td>
                <td>שם</td>
                <td></td>
                <td>רווח</td>
                <td>רווח ממוצע</td>
                <td>מס משחקים</td>
                <td>משחקים בפלוס</td>
                <td>אחוז הצלחה</td>
                <td>
                  כמות פריטות <br></br>ממוצעת
                </td>
                <td>משחק אחרון</td>
              </tr>
            </thead>
            <tbody>
              {table.map((player) => (
                <tr key={player.name}>
                  <td>{rank++}</td>
                  <td>{player.name}</td>
                  <td>
                    <img
                      src={process.env.PUBLIC_URL + `images/${player.name}.jpg`}
                      alt=""
                      className="lastgame "
                    />
                  </td>
                  <td
                    className={
                      player.profit > 0 ? "text-success" : "text-danger"
                    }
                  >
                    {player.profit}
                  </td>
                  <td>{player.avg_profit}</td>
                  <td>{player.num_of_games}</td>
                  <td>{player.is_plus}</td>
                  <td>{player.success_percentage}%</td>
                  <td>{player.avg_num_of_pritot}</td>
                  <td>{player.last_game.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <GamesData />
        </div>
        <Ripple customLoading={this.loading} />
      </div>
    );
  }
}

export default Table;
