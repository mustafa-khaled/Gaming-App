import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../../constants/api";
import axios from "axios";

const initialState = {
  screenshots: [],
  loading: false,
  error: null,
};

export const fetchAsyncGameScreenshots = createAsyncThunk(
  "game/screenshots/fetch",
  async (id) => {
    const { data } = await axios.get(
      `${BASE_URL}games/${id}/screenshots?key=${API_KEY}`,
    );
    return data.results;
  },
);

const gameScreenshotsSlice = createSlice({
  name: "gameScreenshots",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGameScreenshots.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncGameScreenshots.fulfilled, (state, action) => {
      state.screenshots = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncGameScreenshots.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const allScreenshots = (state) => state.gameScreenshots.screenshots;
export const screenshotsLoading = (state) => state.gameScreenshots.loading;

export default gameScreenshotsSlice.reducer;
