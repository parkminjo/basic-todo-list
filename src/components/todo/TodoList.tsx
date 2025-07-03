import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { useSearchParams } from 'react-router-dom';

const TodoList = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get('filter');

  const context = useContext(TodoContext);
  if (!context)
    throw new Error('TodoList는 반드시 TodoProvider 안에서 사용해야 합니다.');
  const { getFilteredTodoList } = context;

  const filteredTodoList = getFilteredTodoList(selectedFilter);

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {filteredTodoList.length === 0 ? (
          <p>추가된 Todo 항목이 없습니다.</p>
        ) : (
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
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
