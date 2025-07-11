import { useSearchParams } from "react-router-dom";
import type { TodoFilter } from "../../api/todoApi";

export const useFilterParams = () => {
	const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get('filter') as TodoFilter | undefined;

	return selectedFilter
}