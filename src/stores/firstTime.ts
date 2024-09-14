import { create } from 'zustand';

type State = {
  firstTime: boolean;
  setFirstTime: (status: boolean) => void;
};

export const useFirstTimeStore = create<State>((set) => ({
  firstTime: true,
  setFirstTime: (status) => set({ firstTime: status }),
}));
