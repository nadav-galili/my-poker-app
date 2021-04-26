import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function getStats() {
  return http.get(`${apiUrl}/stats`);
}

export default {
  getStats,
};
