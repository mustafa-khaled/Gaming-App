import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDataFromApi } from "../../utils/api";

const initialState = {
  stores: [],
  loading: false,
  storesSingle: [],
  error: null,
};

export const fetchAsyncStores = createAsyncThunk("stores/fetch", async () => {
  const data = await fetchDataFromApi(`stores`);
  return data.results;
});

export const fetchAsyncStoresDetails = createAsyncThunk(
  "stores/details/fetch",
  async (id) => {
    const data = await fetchDataFromApi(`store`);
    return data;
  },
);

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

export const selectAllStores = (state) => state.stores.stores;
export const selectAllStoresStatus = (state) => state.store.storesStatus;
export const selectSingleStore = (state) => state.store.storesSingle;
export const selectSingleStoreStatus = (state) =>
  state.store.storesSingleStatus;

export const storyLoading = (state) => state.stores.loading;
export const storyError = (state) => state.stores.error;

export default storeSlice.reducer;
