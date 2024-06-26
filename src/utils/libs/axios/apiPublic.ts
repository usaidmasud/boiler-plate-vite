import axios from "axios";

const baseURL: string | undefined = import.meta.env.VITE_API_URL;
export const apiPublic = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
