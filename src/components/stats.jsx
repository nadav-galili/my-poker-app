import React, { Component } from "react";
import PlayerCard from "./playerCard";
import tableService from "../services/tableService";

class Stats extends Component {
  state = {
    table: [],
  };

  async componentDidMount() {
    const { data } = await tableService.getTable();
    this.setState({ table: data[1] });
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <h1>עמוד בבנייה</h1>
        <h1>
          <u>Player Stats</u>
        </h1>
        <div className="row">
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    );
  }
}

export default Stats;
