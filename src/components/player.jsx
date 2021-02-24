import React from "react";

const Player = (props) => {
  const player = props.player;
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{player.id}</h5>
          <p className="card-text">{player.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
