import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoListQuery } from '../../hooks/todo/useTodoListQuery';

const TodoList = () => {
  const { data: todoList, isPending, isError } = useTodoListQuery();

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {todoList?.length === 0 ? (
          <p>추가된 Todo 항목이 없습니다.</p>
        ) : (
          todoList?.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;
