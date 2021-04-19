import React from "react";

const PlayerCard = ({ stats }) => {
  if (!stats) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="card bg-dark text-white m-3">
      <img
        src={process.env.PUBLIC_URL + `/images/${stats[0].name}.jpg`}
        className="card-img stats"
        alt="..."
      />
      <div className="card-img-overlay">
        <h5 className="card-title">
          <u>אלוף הרווח הממוצע</u>
        </h5>
        <h5 className="card-text text-right p-2">
          :רווח ממוצע עונתי של
          {stats[0].avg_profit}
        </h5>
        <br />
        <br />
        <h5 className="card-text p-3">
          <ul>
            <li>
              2 {stats[1].name} {stats[1].avg_profit}
            </li>
            <li>
              3 {stats[2].name} {stats[2].avg_profit}
            </li>
          </ul>
        </h5>
      </div>
    </div>
  );
};

export default PlayerCard;
