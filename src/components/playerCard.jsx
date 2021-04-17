import React from "react";

const PlayerCard = () => {
  return (
    <div className="card bg-dark text-white m-3">
      <img
        src={process.env.PUBLIC_URL + "/images/bibs.jpg"}
        className="card-img stats"
        alt="..."
      />
      <div className="card-img-overlay">
        <h5 className="card-title">
          <u>אלוף הרווח הממוצע</u>
        </h5>
        <p className="card-text">רווח ממוצע עונתי של:</p>
        <p className="card-text ">Last updated 3 mins ago</p>

        <p className="card-text mt-5">Last updated 3 mins ago</p>
        <p className="card-text mt-5">Last updated 3 mins ago</p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  );
};

export default PlayerCard;
