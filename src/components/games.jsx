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
        const audio = new Audio(process.env.PUBLIC_URL + `audio/cash.mp3`);
        audio.play();
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

          this.setState({ players });
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
        <div className="appSelect">
          <p>בחר האם המשחק בלייב/אפליקציה</p>
          <select name="app" id="">
            <option value="לייב">לייב</option>
            <option value="לייב">אפליקציה</option>
            <option value="לייב">אפליקציה לא לטבלה</option>
          </select>
        </div>

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
          className="myTable mt-3 table-responsive"
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
