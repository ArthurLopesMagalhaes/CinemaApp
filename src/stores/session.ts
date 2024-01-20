import { create } from "zustand";

import { Session } from "@supabase/supabase-js";

type State = {
  session: Session | null;
  setSession: (session: Session | null) => void;
  clearSession: () => void;
};

export const useSessionStore = create<State>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  clearSession: () => set({ session: null }),
}));
