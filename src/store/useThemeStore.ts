import { create } from "zustand";

type State = {
	theme: string
}

type Actions = {
	setTheme: (theme: string) => void
}

export const useThemeStore = create<State & Actions>((set) => ({
	theme:'light',
	setTheme: (theme) => set({theme})
}))