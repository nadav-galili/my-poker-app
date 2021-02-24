import React from "react";
import Player from "./player";

const Players = (props) => {
  const players = props.players;
  return (
    <div className="container">
      <div className="row">
        {players.map((player) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default Players;
