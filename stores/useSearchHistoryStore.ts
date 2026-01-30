import { create } from 'zustand';
import type { LocationApiResponse } from '../types/locationResponse';

interface SearchHistoryStore {
  history: LocationApiResponse[];
  addToHistory: (location: LocationApiResponse) => void;
  clearHistory: () => void;
}

const MAX_HISTORY_ITEMS = 5;

export const useSearchHistoryStore = create<SearchHistoryStore>((set) => ({
  history: [],
  clearHistory: () => set({ history: [] }),
  addToHistory: (location: LocationApiResponse) =>
    set((state) => {
      const exists = state.history.some(
        (item) => item.lat === location.lat && item.lon === location.lon,
      );
      // Move existing item to the top
      if (exists) {
        return {
          history: [
            location,
            ...state.history.filter(
              (item) =>
                !(item.lat === location.lat && item.lon === location.lon),
            ),
          ],
        };
      }
      // Add new item to the top and limit to MAX_HISTORY_ITEMS
      return {
        history: [location, ...state.history].slice(0, MAX_HISTORY_ITEMS),
      };
    }),
}));
