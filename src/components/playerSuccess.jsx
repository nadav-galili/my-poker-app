import React from "react";

const PlayerSuccess = ({ stats }) => {
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
          <u>מלך ניצול ההזדמנויות</u>
        </p>
        <p className="card-text ">
          אחוז הצלחה
          <br />
          <u>
            <b>
              <span style={{ fontSize: "1em" }}>
                {stats[0].success_percentage}%
              </span>
              <br />
            </b>
          </u>
          <b>
            <span>משחקים בפלוס -{stats[0].is_plus}</span>
          </b>
        </p>

        <div className="card-text text-left ">
          <ol start="2">
            <li>
              {stats[1].name} {stats[1].is_plus}
            </li>
            <li>
              {stats[2].name} {stats[2].is_plus}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PlayerSuccess;
