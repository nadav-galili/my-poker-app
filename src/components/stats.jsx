import React, { Component } from "react";
import PlayerAvgProfit from "./playerAvgProfit";
import statsService from "../services/statsService";
import PlayerGameNum from "./playerGameNum";
import PlayerSuccess from "./playerSuccess";
import PlayerCashing from "./playerCashing";
import AllCash from "./allCash";
import PlayerProfit from "./playerProfit";

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
    console.log(stats[5]);

    return (
      <div className="container">
        <h1>
          <u>Player Stats</u>
        </h1>

        <div className="mx-auto row row-col-6 row-col-md-4 row-col-lg-3 row-col-xl-3">
          {stats.length > 0 && <PlayerAvgProfit stats={stats[0]} />}
          {stats.length > 0 && <PlayerGameNum stats={stats[1]} />}
          {stats.length > 0 && <PlayerSuccess stats={stats[2]} />}
          {stats.length > 0 && <PlayerCashing stats={stats[3]} />}
        </div>
        <div className=" all-time-stats">
          <h3>
            -סה"כ כסף ששוחק בשולחן
            {stats.length > 0 && <AllCash stats={stats[4]} />}
          </h3>
          <img
            src="https://globalnews.ca/wp-content/uploads/2020/05/cash-edited.jpg?quality=85&strip=all&w=720&h=379&crop=1"
            alt="cash"
          />
        </div>
        <div className="player-profit m-3">
          <u>
            <b>{stats.length > 0 && <PlayerProfit stats={stats[5]} />}</b>
          </u>
        </div>
      </div>
    );
  }
}

export default Stats;
