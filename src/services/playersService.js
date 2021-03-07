import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function getPlayers() {
  return http.get(`${apiUrl}/players`);
}

export default {
  getPlayers,
};
