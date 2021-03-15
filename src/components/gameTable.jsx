import React from "react";

const GameTable = () => {
  return (
    <thead>
      <tr>
        <td>id</td>
        <td>name</td>
        <td></td>
        <td>Current cash</td>
        <td>Cash in hand</td>
        <td>Profit</td>
      </tr>
    </thead>

    // <table className="table">
    //   <thead>
    //     <tr>
    //       <td>id</td>
    //       <td>name</td>
    //       <td></td>
    //       <td>Current cash</td>
    //       <td>Cash in hand</td>
    //       <td>Final profit/loss</td>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {player.map((player) => (
    //       <tr key={player.id}>
    //         <td>{player.selected && player.id}</td>
    //         <td>{player.selected && player.name}</td>
    //         <td>
    //           {player.selected && (
    //             <button
    //               onClick={() => addCashing(player.id)}
    //               className="btn btn-secondary"
    //             >
    //               add 50
    //             </button>
    //           )}
    //         </td>
    //         <td>{player.selected && player.cashing}</td>
    //         <td>
    //           <input
    //             type="number"
    //             onChange={(e) => onInputChange(e, player.id)}
    //           />
    //         </td>

    //         <td>
    //           <b>
    //             <i>{player.cashInHand - player.cashing}</i>
    //           </b>
    //         </td>
    //       </tr>
    //     ))}
    //     <tr>
    //       <td>
    //         <b>Total</b>
    //       </td>
    //       <td></td>
    //       <td></td>

    //       <td>
    //         <b>
    //           {players.reduce((prev, cur) => {
    //             return prev + cur.cashing;
    //           }, 0)}
    //         </b>
    //       </td>
    //     </tr>
    //   </tbody>
    // </table>
  );
};

export default GameTable;
