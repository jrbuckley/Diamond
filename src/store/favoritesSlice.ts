import { StateCreator } from "zustand";

export interface FavoritesSlice {
  favoriteTeams: string[];
  addFavoriteTeam: (teamId: string) => void;
  removeFavoriteTeam: (teamId: string) => void;
  isFavoriteTeam: (teamId: string) => boolean;
}

export const createFavoritesSlice: StateCreator<FavoritesSlice> = (
  set,
  get
) => ({
  favoriteTeams: [],
  addFavoriteTeam: (teamId) =>
    set((state) => ({
      favoriteTeams: [...state.favoriteTeams, teamId],
    })),
  removeFavoriteTeam: (teamId) =>
    set((state) => ({
      favoriteTeams: state.favoriteTeams.filter((id) => id !== teamId),
    })),
  isFavoriteTeam: (teamId) => get().favoriteTeams.includes(teamId),
});
