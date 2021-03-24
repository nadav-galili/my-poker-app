import React, { Component } from "react";
import { apiUrl } from "../config/config.json";
import tableService from "../services/tableService";

class GamesData extends Component {
  state = {
    table: [],
  };
  async componentDidMount() {
    const { data } = await tableService.getTable();
    console.log(data[0]);
    this.setState({ table: data[0] });
  }

  render() {
    const { table } = this.state;

    return (
      <div className="mt-3 ">
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
              <tr key={player.profit}>
                <td>{player.date.slice(0, 10)}</td>
                <td>{player.name}</td>
                <td>{player.cashing}</td>
                <td>{player.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GamesData;
