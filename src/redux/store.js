import { configureStore } from "@reduxjs/toolkit";
// All Games
import gamesReducer from "./features/gamesSlice";
// All Genres
import genreReducer from "./features/genresSlice";
// All Creators
import creatorsReducer from "./features/creatorsSlice";
// All Stores
import storesReducer from "./features/storesSlice";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    genre: genreReducer,
    creators: creatorsReducer,
    stores: storesReducer,
  },
});

export default store;
