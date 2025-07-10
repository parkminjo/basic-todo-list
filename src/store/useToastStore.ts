import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Toast = {
	id: string,
	message: string
}

type State = {
	toasts: { id: Toast['id'], message: Toast['message'] }[],
	
}

type Actions = {
	addToast: (message: string) => void,
  removeToast: (toastId: string) => void,
}

export const useToastStore = create(immer<State & Actions>((set) => ({
	toasts: [],
	addToast: (message) => {
		set(prevState => {
			const id = crypto.randomUUID();
			
			const nextToast = { id, message };
			prevState.toasts.push(nextToast)
		})
	},
	removeToast: (toastId) => {
		set(prevState => {
			const targetIdx = prevState.toasts.findIndex((prevToast: Toast) => prevToast.id === toastId);

			if (targetIdx !== -1) {
				prevState.toasts.splice(targetIdx, 1)
			} 
		})
	}
})))