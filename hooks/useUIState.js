import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc: "/img/recording.png",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
