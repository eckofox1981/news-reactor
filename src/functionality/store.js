import { Remove } from "@mui/icons-material";
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

const sideBarStore = (set) => ({
  sideBarOpen: false,
  openSideBar: () => set({ sideBarOpen: true }, false, "openSideBar"),
  closeSideBar: () => set({ sideBarOpen: false }, false, "closeSideBar"),
});

export const useSideBarStore = create(devtools(sideBarStore));

const activeUserStore = (set) => ({
  activeUser: null,
  setActiveUser: (user) => set({ activeUser: user }, false, "setActiveUser"),
  removeActiveUser: () => set({ activeUser: null }, false, "removeActiveUser"),
});

export const useActiveUserStore = create(
  persist(devtools(activeUserStore), { name: "active-user" })
);
