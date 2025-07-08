import TodoItem from './TodoItem';
import { useTodoListQuery } from '../../hooks/todo/useTodoListQuery';
import { useFilterParams } from '../../hooks/todo/useFilterParams';

const TodoList = () => {
  const selectedFilter = useFilterParams();

  const {
    data: todoList,
    isPending,
    isError,
  } = useTodoListQuery(selectedFilter);

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Tasks</h2>
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
