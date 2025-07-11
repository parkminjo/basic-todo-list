import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"
import { useToastStore } from "../../store/useToastStore";
import { TODO_INFO_MESSAGE } from "../../constants/infoMessage";
import { TODO_ERROR_MESSAGE } from "../../constants/errorMessage";

export const useDeleteTodoMutation = () => {
	const queryClient = useQueryClient();
		const { addToast } = useToastStore();
	

	return useMutation({
    mutationFn: deleteTodo,
		onSuccess: () => {
			addToast(TODO_INFO_MESSAGE.DELETE_TODO)
		},
		onError: () => {addToast(TODO_ERROR_MESSAGE.DELETE_TODO)},
		onSettled: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
  })
}