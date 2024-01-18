import { create } from "zustand";
import { User } from "@supabase/supabase-js";

type UserType = {
  id: string;
  email: string;
  role: string;
};

type State = {
  user: UserType;
  setUser: (user: UserType) => void;
  clearUser: () => void;
};

export const useUserStore = create<State>((set) => ({
  user: { id: "", email: "", role: "" },
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: { email: "", role: "", id: "" } }),
}));
