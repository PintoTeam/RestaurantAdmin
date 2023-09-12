import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { User } from "@/global.types";

interface AppState {
  user?: User;
  token?: string;
  isAuth: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  clearUser: () => void;
}

export const useStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        isAuth: false,
        setToken: (token: string) => set({ token }),
        setUser: (user: User) => set({ user, isAuth: true }),
        clearUser: () => set({ user: undefined, isAuth: false }),
      }),
      {
        name: "boilerrest-storage",
      }
    )
  )
);
