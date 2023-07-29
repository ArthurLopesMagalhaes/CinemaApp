import { create } from "zustand";
import { User } from "@supabase/supabase-js";

type UserType = Pick<User, "email" | "role">;

type State = {
  user: UserType;
  setUser: (user: UserType) => void;
  clearUser: () => void;
};

export const useUserStore = create<State>((set) => ({
  user: {},
  setUser: (user: UserType) => set({ user }),
  clearUser: () => set({ user: { email: "", role: "" } }),
}));
