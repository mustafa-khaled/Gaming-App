import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../constants/api";
import axios from "axios";

export const fetchAsyncStores = createAsyncThunk("stores/fetch", async () => {
  const { data } = await axios.get(`${BASE_URL}stores?key=${API_KEY}`);
  return data;
});

export const fetchAsyncStoresDetails = createAsyncThunk(
  "stores/details/fetch",
  async (id) => {
    const { data } = await axios.get(`${BASE_URL}stores/${id}?key${API_KEY}`);
    return data;
  },
);
