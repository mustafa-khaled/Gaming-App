import axios from "axios";

export const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
export const BASE_URL = "https://api.rawg.io/api/";

export const fetchDataFromApi = async (url, page) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${url}?key=${API_KEY}${page ? `&page=${page}` : ""}`,
    );
    return data;
  } catch (error) {
    return error;
  }
};
