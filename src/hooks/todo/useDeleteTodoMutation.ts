import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"

export const useDeleteTodoMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
    mutationFn: deleteTodo,
		onSuccess: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
  })
}