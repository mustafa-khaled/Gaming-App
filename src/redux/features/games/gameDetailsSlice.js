import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../../constants/api";
import axios from "axios";

const initialState = {
  game: [],
  loading: false,
  error: null,
};

export const fetchAsyncGameDetails = createAsyncThunk(
  "game/details/fetch",
  async (id) => {
    const { data } = await axios.get(`${BASE_URL}games/${id}?key=${API_KEY}`);
    return data;
  },
);

const gameDetailsSlice = createSlice({
  name: "gameDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGameDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncGameDetails.fulfilled, (state, action) => {
      state.game = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncGameDetails.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const gameDetailsData = (state) => state.gameDetails.game;
export const gameDetailsLoading = (state) => state.gameDetails.loading;
export const gameDetailsError = (state) => state.gameDetails.error;

export default gameDetailsSlice.reducer;
