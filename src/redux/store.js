import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";
import genreReducer from "./genresSlice";
import creatorsReducer from "./creatorsSlice";
import storesReducer from "./storesSlice";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    genre: genreReducer,
    creators: creatorsReducer,
    stores: storesReducer,
  },
});

export default store;
