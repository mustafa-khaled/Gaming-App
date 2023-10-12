import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../utils/api";

const initialState = {
  creators: [],
  loading: false,
  error: null,
};

export const fetchAsyncCreators = createAsyncThunk(
  "developers/fetch",
  async (page = 1) => {
    const data = await fetchDataFromApi(`creators`, page);
    return data.results;
  },
);

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

export const selectAllCreators = (state) => state.creators.creators;
export const creatorsLoading = (state) => state.creators.loading;
export const creatorsError = (state) => state.creators.error;

export default creatorSlice.reducer;
