import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"
import { useToastStore } from "../../store/useToastStore"
import { TODO_INFO_MESSAGE } from "../../constants/infoMessage"
import { TODO_ERROR_MESSAGE } from "../../constants/errorMessage"

export const useAddTodoMutation = () => {
	const queryClient = useQueryClient()
	const { addToast } = useToastStore();

	return useMutation({
    mutationFn: addTodo,
		onSuccess: () => {
			addToast(TODO_INFO_MESSAGE.POST_TODO)
		},
		onError: () => {addToast(TODO_ERROR_MESSAGE.POST_TODO)},
		onSettled: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
  })
}