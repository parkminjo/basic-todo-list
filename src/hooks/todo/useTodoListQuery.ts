import { useQuery } from "@tanstack/react-query"
import { getTodoList, type TodoFilter } from "../../api/todoApi"
import { QUERY_KEY } from "../../constants/queryKey"

export const useTodoListQuery = (filter?: TodoFilter)=> {
	return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST, filter],
    queryFn: () =>  getTodoList(filter),
  })
}