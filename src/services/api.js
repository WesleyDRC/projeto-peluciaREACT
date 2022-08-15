import axios from "axios";

const baseURL = "https://plush-backend-dev.herokuapp.com";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

