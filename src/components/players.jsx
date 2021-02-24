import React from "react";
import Player from "./player";

const Players = (props) => {
  const players = props.players;
  console.log(props);
  return (
    <div className="container">
      <div className="row">
        {players.map((player) => (
          <Player key={player.id} player={player} addPlayer={props.addPlayer} />
        ))}
      </div>
    </div>
  );
};

export default Players;
