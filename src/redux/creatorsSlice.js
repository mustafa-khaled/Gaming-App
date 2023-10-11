import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncCreators } from "./utils/creatorUtils";

const initialState = {
  creators: [],
  loading: false,
  error: null,
};

const creatorSlice = createSlice({
  name: "creator",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchAsyncCreators.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncCreators.fulfilled, (state, action) => {
      state.creators = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncCreators.rejected, (state) => {
      state.error = "Failed To Fetch Creators Data.";
    });
  },
});

export const selectAllCreators = (state) => state.creators.creators.results;

export const creatorsLoading = (state) => state.creators.loading;
export const creatorsError = (state) => state.creators.error;

export default creatorSlice.reducer;
