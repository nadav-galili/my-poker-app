import React from "react";

const Players = ({ player, selectPlayer }) => {
  return (
    <div className=" col-4 col-md-6  col-lg-4 col-xl-2 mt-2 ">
      <div className="card">
        <img
          src={process.env.PUBLIC_URL + `images/${player.name}.jpg`}
          className="card-img-top"
          alt="..."
        />
        <div className={player.selected ? "card-body bg-success" : "card-body"}>
          <div className="card-title text-center">{player.name}</div>

          <button
            type="button"
            onClick={selectPlayer}
            className="btn btn-primary"
          >
            +Add Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
