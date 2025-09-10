import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const mode = (set) => ({
  uiMode: "light",
  setUiMode: (mode) => set({ uiMode: mode }, false, "setUiMode"),
});

export const useMode = create(persist(devtools(mode), { name: "ui-mode" }));

const baseArticles = (set) => ({
  baseArticles: null,
  setBaseArticles: (data) =>
    set({ baseArticles: data }, false, "setBaseArticles"),
});

export const useBaseArticles = create(
  persist(devtools(baseArticles), { name: "baseArticles" })
);
