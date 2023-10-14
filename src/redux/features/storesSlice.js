import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../utils/api";

const initialState = {
  stores: [],
  loading: false,

  error: null,
};

export const fetchAsyncStores = createAsyncThunk("stores/fetch", async () => {
  const data = await fetchDataFromApi(`stores`);
  return data.results;
});

const storeSlice = createSlice({
  name: "stores",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncStores.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncStores.fulfilled, (state, action) => {
      state.stores = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncStores.rejected, (state) => {
      state.error = "Failed To Fetch Stores Data.";
    });
  },
  reducers: {},
});

export const selectAllStores = (state) => state.stores.stores;
export const storyLoading = (state) => state.stores.loading;
export const storyError = (state) => state.stores.error;

export default storeSlice.reducer;
