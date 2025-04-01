import axios from "axios";

export const createAxiosService = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
