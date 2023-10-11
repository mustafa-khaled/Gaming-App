import { createSlice } from "@reduxjs/toolkit";
import { fetchAsyncStores, fetchAsyncStoresDetails } from "./utils/storesUtils";

const initialState = {
  stores: [],
  loading: false,
  storesSingle: [],
  error: null,
};

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

    builder.addCase(fetchAsyncStoresDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchAsyncStoresDetails.fulfilled, (state, action) => {
      state.storesSingle = action.payload;
      state.loading = false;
    });

    builder.addCase(fetchAsyncStoresDetails.rejected, (state) => {
      state.error = "Failed To Fetch Store Data.";
    });
  },
  reducers: {},
});

export const selectAllStores = (state) => state.stores.stores.results;
export const selectAllStoresStatus = (state) => state.store.storesStatus;
export const selectSingleStore = (state) => state.store.storesSingle;
export const selectSingleStoreStatus = (state) =>
  state.store.storesSingleStatus;

export const storyLoading = (state) => state.stores.loading;
export const storyError = (state) => state.stores.error;

export default storeSlice.reducer;
