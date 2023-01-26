import axios from "axios";

const url = "/";
export const api = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
