import { create } from "zustand";

type State = {
	toasts: { id: string, message: string }[],
	
}

type Actions = {
	addToast: (message: string) => void,
  removeToast: (toastId: string) => void,
}

export const useToastStore = create<State & Actions>((set) => ({
	toasts: [],
	addToast: (message) => {
		set(prevState => {
			const toastId = crypto.randomUUID();
			return {toasts: [...prevState.toasts, { id: toastId, message }]}
		})
	},
	removeToast: (toastId) => {
		set(prevState => {
			return {toasts: prevState.toasts.filter(toast => toast.id !== toastId)}
		})
	}
}))