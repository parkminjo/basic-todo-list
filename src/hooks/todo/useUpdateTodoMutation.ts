import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"
import { useToastStore } from "../../store/useToastStore";
import { TODO_INFO_MESSAGE } from "../../constants/infoMessage";

export const useUpdateTodoMutation = () => {
	const queryClient = useQueryClient();
	const { addToast } = useToastStore();
	

	return useMutation({
		mutationFn: updateTodo,
		onSuccess: () => {
			addToast(TODO_INFO_MESSAGE.PATCH_TODO)
		},
		onSettled: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
	})
}