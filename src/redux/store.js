import { configureStore } from "@reduxjs/toolkit";

// All Games
import gamesReducer from "./features/games/gamesSlice";
// Game Details
import gameDetailsReducer from "./features/games/gameDetailsSlice";
// Game Screenshots
import gameScreenshotsReducer from "./features/games/gameScreenshotsSlice";
// All Genres
import genreReducer from "./features/genresSlice";
// All Creators
import creatorsReducer from "./features/createSlice";
// All Stores
import storesReducer from "./features/storesSlice";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    gameDetails: gameDetailsReducer,
    gameScreenshots: gameScreenshotsReducer,
    genre: genreReducer,
    creators: creatorsReducer,
    stores: storesReducer,
  },
});

export default store;
