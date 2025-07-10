import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"
import { useToastStore } from "../../store/useToastStore";

export const useUpdateTodoMutation = () => {
	const queryClient = useQueryClient();
	const { addToast } = useToastStore();
	

	return useMutation({
		mutationFn: updateTodo,
		onSuccess: () => {
			addToast('투두 완료 상태가 변경되었습니다.')
		},
		onSettled: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
	})
}