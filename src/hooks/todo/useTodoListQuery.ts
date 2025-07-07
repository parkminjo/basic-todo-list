import { useQuery } from "@tanstack/react-query"
import { getTodoList } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"

export const useTodoListQuery = ( )=> {
	return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST],
    queryFn: getTodoList,
  })
}