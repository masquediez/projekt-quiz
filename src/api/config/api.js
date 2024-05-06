import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5151/v1",
});

export default api;
