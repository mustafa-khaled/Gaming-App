import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncGenres } from "./utils/genreUtils";

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGenres.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncGenres.rejected, (state) => {
      state.error = "Failed To Fetch Data.";
    });
  },
});

export const selectAllGenres = (state) => state.genre.genres.results;
export const genresLoading = (state) => state.genre.loading;
export const genresError = (state) => state.genre.error;

export default genreSlice.reducer;
