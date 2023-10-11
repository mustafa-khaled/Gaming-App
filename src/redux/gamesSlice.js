import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncGameDetails, fetchAsyncGames } from "./utils/gameUtil";

const initialState = {
  games: [],
  gamesSingle: {},
  loading: false,
  error: false,
};

const gameSlice = createSlice({
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

    builder.addCase(fetchAsyncGameDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncGameDetails.fulfilled, (state, action) => {
      state.gamesSingle = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncGameDetails.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const selectAllGames = (state) => state.games.games.results;
export const selectGamesSingle = (state) => state.games.gamesSingle;
export const gamesLoading = (state) => state.games.loading;
export const gamesError = (state) => state.games.error;

export default gameSlice.reducer;
