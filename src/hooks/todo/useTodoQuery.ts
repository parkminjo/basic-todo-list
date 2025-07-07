import { useParams } from "react-router-dom";
import { QUERY_KEY } from "../../constants/queryKey"
import { useQuery } from "@tanstack/react-query"
import { getTodo } from "../../api/todoApi";

export const useTodoQuery = () => {
  const { id } = useParams();

	return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST, id],
    queryFn: () => getTodo(id as string),
  })
}