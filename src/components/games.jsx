import React, { Component } from "react";
import Players from "./players";
import DayPicker from "./common/date-picker";

class Games extends Component {
  state = {
    players: [
      { id: 1, name: "Bibs" },
      { id: 2, name: "Vasili" },
      { id: 3, name: "Rami" },
      { id: 4, name: "Asad" },
    ],
  };

  render() {
    const { players } = this.state;

    return (
      <div>
        <DayPicker />
        <Players players={players} />

        {/* <table border="2">
          <thead>
            <tr>
              <td>3</td>
            </tr>
          </thead>
          <tbody>
            <tr>ll</tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default Games;
