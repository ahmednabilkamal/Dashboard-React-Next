import create from "zustand";
import { Item } from "./types";

interface DashboardState {
  selectedItem: Item | null;
  isFormOpen: boolean;
  setSelectedItem: (item: Item | null) => void;
  toggleForm: () => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  selectedItem: null,
  isFormOpen: false,
  setSelectedItem: (item) => set({ selectedItem: item }),
  toggleForm: () => set((state) => ({ isFormOpen: !state.isFormOpen })),
}));
