import { create } from "zustand";
import { createGamesSlice, GamesSlice } from "./gamesSlice";
import { createFavoritesSlice, FavoritesSlice } from "./favoritesSlice";

type StoreState = GamesSlice & FavoritesSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createGamesSlice(...a),
  ...createFavoritesSlice(...a),
}));
