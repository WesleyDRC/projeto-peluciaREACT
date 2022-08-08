import axios from "axios";

const baseURL = "https://plush-backend-dev.herokuapp.com";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
