import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

const TodoList = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error('TodoList는 반드시 TodoProvider 안에서 사용해야 합니다.');
  const { todoList } = context;

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {todoList.length === 0 ? (
          <p>추가된 Todo 항목이 없습니다.</p>
        ) : (
          todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
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
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;
