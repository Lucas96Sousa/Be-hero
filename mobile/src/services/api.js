import axios from "axios";

const api = axios.create({
  baseURL: "http://182.15.0.107:3001",
});

export default api;
