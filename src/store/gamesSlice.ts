import { StateCreator } from "zustand";

export interface Game {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: "scheduled" | "live" | "final";
  startTime: string;
  conference: string;
}

export interface GamesSlice {
  games: Game[];
  setGames: (games: Game[]) => void;
  updateGame: (gameId: string, updates: Partial<Game>) => void;
}

export const createGamesSlice: StateCreator<GamesSlice> = (set) => ({
  games: [],
  setGames: (games) => set({ games }),
  updateGame: (gameId, updates) =>
    set((state) => ({
      games: state.games.map((game) =>
        game.id === gameId ? { ...game, ...updates } : game
      ),
    })),
});
