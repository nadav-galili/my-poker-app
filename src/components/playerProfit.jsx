import React from "react";

const PlayerProfit = ({ stats }) => {
  return (
    <div className="mx-auto">
      <p>רשימת הרווחים הגדולים</p>
      <ol>
        {stats.map((player) => (
          <li>
            {player.name}-{player.profit}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PlayerProfit;
