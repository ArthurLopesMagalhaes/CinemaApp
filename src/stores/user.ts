import { create } from 'zustand';

export type UserType = {
  id: string;
  email?: string;
  function?: string;
  name?: string;
};

const initialUserData: UserType = {
  id: '',
  email: '',
  function: 'standard',
  name: '',
};

type State = {
  user: UserType;
  setUser: (user: UserType) => void;
  clearUser: () => void;
};

export const useUserStore = create<State>((set) => ({
  user: initialUserData,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: initialUserData }),
}));
