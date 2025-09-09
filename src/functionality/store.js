import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  uiMode: "dark",
  setUiMode: (mode) => set({ uiMode: mode }, false, "setUiMode"),
});

export const useStore = create(persist(devtools(store), { name: "ui-mode" }));
