import axios from "axios";

<<<<<<< Updated upstream
const baseURL = process.env.REACT_APP_BASE_URL_
=======
// const baseURL = process.env.REACT_APP_BASE_URL;
const baseURL = "http://localhost:3333"
>>>>>>> Stashed changes

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

