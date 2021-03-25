import http from "./httpService";
import { apiUrl } from "../config/config.json";

const playersInfo = "playersInfo";

export function getPlayers() {
  return http.get(`${apiUrl}/players`);
}

export function getCurrentPlayers() {
  try {
    const currentGame = localStorage.getItem(playersInfo);
    let currentPlayers = JSON.parse(currentGame);
    return currentPlayers;
  } catch (ex) {
    return null;
  }
}

export default {
  getPlayers,
  getCurrentPlayers,
};
