import axios from "axios";

// const url =
//   process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_URL : "/";

export const api = axios.create({
  baseURL: "/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
