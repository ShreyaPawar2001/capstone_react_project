import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getVideos = async () => {
  const response = await API.get("/videos");
  return response.data;
};
