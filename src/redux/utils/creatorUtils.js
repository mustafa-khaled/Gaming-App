import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../constants/api";

export const fetchAsyncCreators = createAsyncThunk(
  "developers/fetch",
  async (page = 1) => {
    const { data } = await axios.get(
      `${BASE_URL}creators?key=${API_KEY}&page=${page}`,
    );
    return data;
  },
);
