import React from "react";

const Players = ({ player, selectPlayer }) => {
  return (
    <div className=" col-md-6 col-lg-4 col-xl-3">
      <div className="card">
        <img src={player.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-title">{player.name}</div>
          {/* <div className="card-title">{player.cash}</div> */}

          {/* <div className="card-title">{player.cashInHand}</div> */}
          <button
            type="button"
            onClick={selectPlayer}
            className="btn btn-primary"
          >
            Add Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
