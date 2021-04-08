import React, { Component } from "react";
import GameTable from "./gameTable";
import Players from "./players";
import http from "../services/httpService";
import { apiUrl } from "../config/config.json";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import playersService from "../services/playersService";
import gameService from "../services/gameService ";
import PlayerTable from "./playersTable";

class Games extends Component {
  state = {
    players: [],
    is_app: 0,
  };

  async componentDidMount() {
    const { data } = await playersService.getPlayers();
    this.setState({ players: data });
    const currentPlayers = playersService.getCurrentPlayers();
    currentPlayers
      ? this.setState({ players: currentPlayers })
      : console.log(currentPlayers);
  }

  selectPlayer(playerId) {
    const push = new Audio(process.env.PUBLIC_URL + `audio/push.mp3`);
    push.play();
    const { players } = this.state;
    players[playerId - 1].selected = !players[playerId - 1].selected;
    this.setState({ players });
  }

  addCashing = (playerId) => {
    Swal.fire({
      title: "?בטוח לפרוט לו",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "כן תפרוט לו",
    }).then((result) => {
      if (result.isConfirmed) {
        let { players } = this.state;
        players[playerId - 1].cashing += 50;
        const playersInfo = JSON.stringify(players);
        localStorage.setItem("playersInfo", playersInfo);
        this.setState({ players });
        const goal = new Audio(process.env.PUBLIC_URL + `audio/goal.mp3`);
        goal.play();
        Swal.fire("נוספה פריטה לשחקן");
      }
    });
  };

  undoCashing = (playerId) => {
    let { players } = this.state;
    if (players[playerId - 1].cashing > 0) {
      players[playerId - 1].cashing -= 50;
      Swal.fire("בוטלה הפריטה");
      const audio = new Audio(process.env.PUBLIC_URL + `audio/notify.mp3`);
      audio.play();
      const playersInfo = JSON.stringify(players);
      localStorage.setItem("playersInfo", playersInfo);
      this.setState({ players });
    }
  };

  onInputChange = (e) => {
    let { players } = this.state;
    players[e.id - 1].cashInHand = e.cashInHand;
    this.setState({ players });
  };

  isAppChange = (e) => {
    console.log(this.state);
    this.setState({ is_app: e.target.value });
  };

  updateGame = async () => {
    Swal.fire({
      title: "?בטוח נגמר המשחק",
      text: "לא תוכל לבטל",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "נגמר",
    }).then((result) => {
      if (result.isConfirmed) {
        let players = this.state.players;
        players = players.filter((player) => player.selected);
        players.map((player) => {
          player.profit = player.cashInHand - player.cashing;
          player.num_of_cashing = player.cashing / 50;
          player.is_app = this.state.is_app;
          this.setState({ players });
          console.log(players);
          localStorage.removeItem("playersInfo");
          return gameService.postGames(player);
        });

        this.props.history.replace("/lastgame");

        toast.success("GAME OVER", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  render() {
    const { players } = this.state;

    return (
      <div className="container mt-3">
        <div className="appSelect col align-self-end text-right">
          <p className="">בחר האם המשחק בלייב/אפליקציה</p>
          <select
            defaultValue={this.state.isApp}
            name="app"
            id=""
            className=""
            onChange={this.isAppChange}
          >
            <option value="0">לייב</option>
            <option value="1">אפליקציה</option>
            <option value="9">אפליקציה לא לטבלה</option>
          </select>
        </div>
        <br />
        <p className="choose col align-self-end text-right ">
          בחר שחקנים שישתתפו במשחק
        </p>
        <div className="row">
          {players.map((player) => (
            <Players
              key={player.id}
              player={player}
              selectPlayer={() => {
                this.selectPlayer(player.id);
              }}
            />
          ))}
        </div>
        <table
          className="myTable table-responsive mt-3 "
          border="2px solid black"
        >
          <GameTable />
          <tbody>
            {players.map((player) => (
              <PlayerTable
                key={player.id}
                player={player}
                addCashing={() => {
                  this.addCashing(player.id);
                }}
                undoCashing={() => {
                  this.undoCashing(player.id);
                }}
                changeInput={this.onInputChange}
                getId={this.getId}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>סה"כ</td>
              <td></td>
              <td>
                {players.reduce((a, b) => {
                  return a + b.cashing;
                }, 0)}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <button
          type="button"
          className="btn btn-primary btn-lg mt-3 border"
          onClick={this.updateGame}
        >
          Update Results
        </button>
      </div>
    );
  }
}

export default Games;
