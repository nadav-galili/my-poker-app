import React from "react";

const Player = (props) => {
  const player = props.player;
  console.log(props);
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{player.id}</h5>
          <p className="card-text">{player.name}</p>
          <p className="card-text">{player.selected ? "true" : "false"}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={props.addPlayer}
          >
            Add player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
