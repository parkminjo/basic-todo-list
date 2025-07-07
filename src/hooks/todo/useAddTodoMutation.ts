import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"

export const useAddTodoMutation = () => {
	const queryClient = useQueryClient()

	return useMutation({
    mutationFn: addTodo,
		onSuccess: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
  })
}