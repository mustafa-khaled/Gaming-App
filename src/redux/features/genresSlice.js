import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../constants/api";
import axios from "axios";

const initialState = {
  genres: [],
  loading: false,
  error: null,
};

export const fetchAsyncGenres = createAsyncThunk(
  "genres/fetch",
  async (page = 1) => {
    const { data } = await axios.get(
      `${BASE_URL}genres?key=${API_KEY}&page=${page}`,
    );
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
