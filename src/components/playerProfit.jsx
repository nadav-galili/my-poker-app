import React from "react";

const PlayerProfit = ({ stats }) => {
  stats.forEach((e) => {
    e.date = new Date(e.date);
    e.d = e.date.getDate();
    e.m = e.date.getMonth();
    e.y = e.date.getFullYear();
  });

  return (
    <div className="mx-auto">
      <p>רשימת הרווחים הגדולים</p>
      <ol>
        {stats.map((player) => (
          <li key={player.d + player.m + player.name}>
            {player.name}-{player.profit}, Date-
            {player.d + "/" + player.m + "/" + player.y}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PlayerProfit;
