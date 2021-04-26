import React from "react";

const PlayerProfit = ({ stats }) => {
  return (
    <div className="mx-auto">
      <p>רשימת הרווחים הגדולים</p>
      <ol>
        {stats.map((player) => (
          <li key={player.date + player.name}>
            {player.name}-Total:{player.profit}, Date-{player.date.slice(0, 10)}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PlayerProfit;
