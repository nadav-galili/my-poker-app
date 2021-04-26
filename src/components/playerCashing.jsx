import React from "react";

const playerCashing = ({ stats }) => {
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
          <u>הבונקר של השולחן</u>
        </p>
        <p>
          מספר פריטות ממוצע
          <u>
            <b>
              <span style={{ fontSize: "1.5em" }}>
                {" "}
                {stats[0].avg_num_of_pritot}
              </span>
            </b>
          </u>
        </p>

        <div className="card-text pt-4">
          <ul>
            <li>
              2- {stats[1].name} {stats[1].avg_num_of_pritot}
            </li>
            <li>
              3- {stats[2].name} {stats[2].avg_num_of_pritot}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default playerCashing;
