import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
	theme: string
}

type Actions = {
	setTheme: (theme: string) => void
}

export const useThemeStore = create(persist<State & Actions>(
	(set) => ({
	theme:'light',
	setTheme: (theme) => set({theme})
}), {
	name: 'theme-storage',}
))