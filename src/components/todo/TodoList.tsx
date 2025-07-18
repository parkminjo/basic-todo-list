import TodoItem from './TodoItem';
import { useTodoListQuery } from '../../hooks/todo/useTodoListQuery';
import { useFilterParams } from '../../hooks/todo/useFilterParams';
import { TODO_ERROR_MESSAGE } from '../../constants/errorMessage';

const TodoList = () => {
  const selectedFilter = useFilterParams();

  const {
    data: todoList,
    isPending,
    isError,
  } = useTodoListQuery(selectedFilter);

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>{TODO_ERROR_MESSAGE.GET_TODO_LIST}</div>;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold dark:text-white">Tasks</h2>
      <ul className="flex flex-col gap-4">
        {todoList?.length === 0 ? (
          <p>추가된 Todo 항목이 없습니다.</p>
        ) : (
          todoList?.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </ul>
    </section>
  );
};

export default TodoList;
