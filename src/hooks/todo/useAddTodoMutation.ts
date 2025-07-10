import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"
import { useToastStore } from "../../store/useToastStore"

export const useAddTodoMutation = () => {
	const queryClient = useQueryClient()
	const { addToast } = useToastStore();

	return useMutation({
    mutationFn: addTodo,
		onSuccess: () => {
			addToast('투두를 추가했습니다.')
		},
		onSettled: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
  })
}