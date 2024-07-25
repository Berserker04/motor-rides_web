import { create } from "zustand";
import { userInit } from "../types/user/userInit";

interface propsState {
  user: IUser;
  token: string | null;
}

interface propsAction {
  setUser: ({}:propsState) => void;
  removeUser: () => void;
}

export const useUserStore = create<propsState & propsAction>((set) => ({
  user: userInit,
  token: null,
  setUser: ({ user, token }: propsState) => set((state: propsState | propsAction) => {
    return ({ ...state, user, token })
  }),
  removeUser: () => set({ user: userInit, token: "" }),
}));
