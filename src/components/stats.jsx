import React, { Component } from "react";
import PlayerCard from "./playerCard";
import statsService from "../services/statsService";
import http from "../services/httpService";

class Stats extends Component {
  state = {
    stats: [],
  };

  async componentDidMount() {
    const { data } = await statsService.getStats();
    if (data.length > 0) this.setState({ stats: data });
  }

  render() {
    const { stats } = this.state;
    console.log("z", stats);
    return (
      <div className="container">
        <h1>...עמוד בבנייה</h1>
        <h1>
          <u>Player Stats</u>
        </h1>
        <div className="row">
          {stats.length > 0 && <PlayerCard stats={stats} />}
          {/* <PlayerCard /> */}
        </div>
      </div>
    );
  }
}

export default Stats;
