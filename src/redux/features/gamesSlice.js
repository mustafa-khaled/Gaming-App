import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../utils/api";

const initialState = {
  games: [],
  loading: false,
  error: null,
};

// Get Games Data From Api
export const fetchAsyncGames = createAsyncThunk(
  "games/fetch",
  async (page = 1) => {
    const data = await fetchDataFromApi(`games`, page);
    return data.results;
  },
);

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGames.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncGames.fulfilled, (state, action) => {
      state.games = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncGames.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const allGames = (state) => state.games.games;
export const gamesLoading = (state) => state.games.loading;
export const gamesError = (state) => state.games.error;

export default gamesSlice.reducer;
