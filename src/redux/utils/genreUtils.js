import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_KEY, BASE_URL } from "../../constants/api";

export const fetchAsyncGenres = createAsyncThunk(
  "genres/fetch",
  async (page = 1) => {
    const { data } = await axios.get(
      `${BASE_URL}genres?key=${API_KEY}&page=${page}`,
    );
    return data;
  },
);
