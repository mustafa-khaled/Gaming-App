import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../utils/api";

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

export const fetchAsyncGenres = createAsyncThunk(
  "genres/fetch",
  async (page = 1) => {
    const data = await fetchDataFromApi(`genres`, page);
    return data.results;
  },
);

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

export const selectAllGenres = (state) => state.genre.genres;
export const genresLoading = (state) => state.genre.loading;
export const genresError = (state) => state.genre.error;

export default genreSlice.reducer;
