import React from "react";

const PlayerAvgProfit = ({ stats }) => {
  if (!stats) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="card bg-dark text-white m-3">
      <img
        src={process.env.PUBLIC_URL + `/images/${stats[0].name}2.jpg`}
        className="card-img stats"
        alt={`${stats[0].name}`}
      />
      <div className="card-img-overlay">
        <p className="card-title">
          <u>אלוף הרווח הממוצע</u>
        </p>
        <p className="card-text text-right">
          ממוצע עונתי
          <br />
          <u>
            <b>
              <span style={{ fontSize: "1.5em" }}>{stats[0].avg_profit}</span>
            </b>
          </u>
        </p>

        <div className="card-text pt-4 text-left ">
          <ol start="2">
            <li>
              {stats[1].name} {stats[1].avg_profit}
            </li>
            <li>
              {stats[2].name} {stats[2].avg_profit}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PlayerAvgProfit;
