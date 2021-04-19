import React, { Component } from "react";
import { apiUrl } from "../config/config.json";
import tableService from "../services/tableService";

class GamesData extends Component {
  state = {
    table: [],
  };
  async componentDidMount() {
    const { data } = await tableService.getTable();
    this.setState({ table: data[0] });
  }

  render() {
    const { table } = this.state;

    return (
      <div className="mt-3 ">
        <img
          src={process.env.PUBLIC_URL + `/images/logo-fire.jpeg`}
          alt="logo-fire"
          className="logo-fire"
        />
        <p>
          <b>
            <u>פירוט משחקים</u>
          </b>
        </p>
        <table className="myTable" border="3px solid black">
          <thead>
            <tr className="bg-info bg-gradient">
              <td>תאריך</td>
              <td>שם</td>
              <td>פריטות</td>
              <td>רווח</td>
            </tr>
          </thead>

          <tbody>
            {table.map((player) => (
              // to do - fix key
              <tr key={player.date + player.name + player.profit}>
                <td>{player.date.slice(0, 10)}</td>
                <td>{player.name}</td>
                <td>{player.cashing}</td>
                <td className={player.profit > 0 ? "bg-success" : "bg-danger"}>
                  {player.profit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GamesData;
