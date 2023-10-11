import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import genreReducer from "./genresSlice";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    genre: genreReducer,
  },
});

export default store;
