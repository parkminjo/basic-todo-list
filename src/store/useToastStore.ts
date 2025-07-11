import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Toast {
  id: string;
  message: string;
}

interface InitialState {
  toasts: Toast[];
}

const initialState: InitialState = {
  toasts: [],
};

export const useToastStore = create(
  immer(
    combine(initialState, (set) => {
      const addToast = (message: string) => {
        const id = crypto.randomUUID();

        set((state) => {
          state.toasts.push({ id, message });
        });

        setTimeout(() => {
          removeToast(id);
        }, 1500);
      };

      const removeToast = (toastId: string) => {
        set((state) => {
          const index = state.toasts.findIndex((toast) => toast.id === toastId);
          if (index !== -1) {
            state.toasts.splice(index, 1);
          }
        });
      };

      return {
        addToast,
        removeToast,
      };
    })
  )
);