import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type TabId = "hoc" | "tinh" | "mo" | "thi" | "thay";

type EtaState = {
  lesson: number;
  read: number[];
  tab: TabId;
  bestScore: number | null;
  sticker: { x: number; y: number };
  railsOpen: boolean;
  setTab: (tab: TabId) => void;
  setLesson: (lesson: number) => void;
  markRead: (lesson: number) => void;
  setBest: (score: number) => void;
  setSticker: (sticker: { x: number; y: number }) => void;
  setRails: (open: boolean) => void;
};

export const useEta = create<EtaState>()(
  persist(
    (set) => ({
      lesson: 1,
      read: [],
      tab: "hoc",
      bestScore: null,
      sticker: { x: 72, y: 58 },
      railsOpen: true,
      setTab: (tab) => set({ tab }),
      setLesson: (lesson) => set({ lesson }),
      markRead: (lesson) =>
        set((s) => ({ read: s.read.includes(lesson) ? s.read : [...s.read, lesson] })),
      setBest: (score) => set((s) => ({ bestScore: s.bestScore == null ? score : Math.max(s.bestScore, score) })),
      setSticker: (sticker) => set({ sticker }),
      setRails: (railsOpen) => set({ railsOpen }),
    }),
    {
      name: "meister-eta-v1",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
