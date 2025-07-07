import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"

export const useUpdateTodoMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: updateTodo,
		onSuccess: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
	})
}