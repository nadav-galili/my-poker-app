import React from "react";

const playerGameNum = ({ stats }) => {
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
          <u>המגיע המתמיד</u>
        </p>
        <p className="pt-3">
          מספר משחקים
          <u>
            <b>
              <span style={{ fontSize: "1.5em" }}> {stats[0].games}</span>
            </b>
          </u>
        </p>

        <div className="card-text pt-4 ">
          <ol start="2">
            <li>
              {stats[1].name} {stats[1].games}
            </li>
            <li>
              {stats[2].name} {stats[2].games}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default playerGameNum;
