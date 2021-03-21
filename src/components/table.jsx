import React, { Component } from "react";
import { apiUrl } from "../config/config.json";
import tableService from "../services/tableService";

class Table extends Component {
  state = {
    table: [],
  };
  async componentDidMount() {
    const { data } = await tableService.getTable();

    this.setState({ table: data });
  }

  render() {
    const { table } = this.state;

    return (
      <div className="container ">
        <table className="table myTable" border="3px solid black">
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
                <td>{player.rank}</td>
                <td>{player.name}</td>
                <td>
                  <img
                    src={process.env.PUBLIC_URL + `images/${player.name}.jpg`}
                    alt=""
                    className="lastgame "
                  />
                </td>
                <td
                  className={player.profit > 0 ? "text-success" : "text-danger"}
                >
                  {player.profit}
                </td>
                <td>{player.avg_profit}</td>
                <td>{player.num_of_games}</td>
                <td>{player.is_plus}</td>
                <td>{player.success_percentage}</td>
                <td>{player.avg_num_of_pritot}</td>
                <td>{player.last_game.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
