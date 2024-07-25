import { create } from "zustand";

interface propsState {
  toastList: IToast[];
}

interface propsAction {
  setToast: ({}:IToast) => void;
}

export const useToastStore = create<propsState & propsAction>((set) => ({
  toastList: [],
  setToast: (newToast: IToast) => set((state: propsState) => {
    return ({ ...state, toastList: [...state.toastList, newToast] })
  }),
}));
