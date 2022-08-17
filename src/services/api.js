import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL_

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

