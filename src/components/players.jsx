import React from "react";

const Players = ({ player, selectPlayer }) => {
  return (
    <div className="col-3">
      <div className="card">
        <div className="card-body">
          <div className="card-title">{player.name}</div>
          <div className="card-title">{player.cash}</div>
          <div className="card-title">{player.selected ? "true" : "false"}</div>
          <button type="button" onClick={selectPlayer}>
            Add Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
