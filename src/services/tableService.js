import http from "./httpService";
import { apiUrl } from "../config/config.json";

export function getTable() {
  return http.get(`${apiUrl}/table`);
}

export default {
  getTable,
};
