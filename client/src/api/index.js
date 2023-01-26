import axios from "axios";

const url = process.env.NODE_ENV === "production" ? process.env.API_URL : "/";
export const api = axios.create({
  baseURL: url,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    Accept: "application/json",
  },
});
