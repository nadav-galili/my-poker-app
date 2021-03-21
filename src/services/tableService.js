import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function getTable() {
  return http.get(`${apiUrl}/table`);
}

// export function postGames(table) {
//   return http.post(`${apiUrl}/table`,table);
// }

// export function getLastGame(game) {
//   return http.get(`${apiUrl}/games/lastgame`,table);
// }

export default {
  getTable,
};
