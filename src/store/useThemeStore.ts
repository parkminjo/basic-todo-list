import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

type Theme = 'light' | 'dark';

interface InitialState {
	theme: Theme;
}

const initialState: InitialState = {
	theme: 'light',
}

export const useThemeStore = create(
	persist(
		combine(initialState, (set) => ({
			setTheme: (theme: Theme) => set({ theme }),
		})),
		{
			name: 'theme-storage'
		}
	)
);