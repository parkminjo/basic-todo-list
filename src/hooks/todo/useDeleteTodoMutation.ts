import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTodo } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"
import { useToastStore } from "../../store/useToastStore";

export const useDeleteTodoMutation = () => {
	const queryClient = useQueryClient();
		const { addToast } = useToastStore();
	

	return useMutation({
    mutationFn: deleteTodo,
		onSuccess: () => {
			addToast('투두가 성공적으로 삭제되었습니다.')
		},
		onSettled: () => queryClient.invalidateQueries({queryKey: [QUERY_KEY.TODO_LIST]})
  })
}