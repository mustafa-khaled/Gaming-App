import { createAsyncThunk } from "@reduxjs/toolkit";

import { API_KEY, BASE_URL } from "../../constants/api";
import axios from "axios";

export const fetchAsyncGames = createAsyncThunk(
  "games/fetch",
  async (page = 1) => {
    const { data } = await axios.get(
      `${BASE_URL}games?key=${API_KEY}&page=${page}`,
    );
    return data;
  },
);

export const fetchAsyncGameDetails = createAsyncThunk(
  "game/details/fetch",
  async (id) => {
    const { data } = await axios.get(`${BASE_URL}games/${id}?key=${API_KEY}`);
    return data;
  },
);
