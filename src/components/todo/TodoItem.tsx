import styled from 'styled-components';
import type { Todo } from '../../types/todo.type';
import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Link } from 'react-router-dom';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error('TodoItem는 반드시 TodoProvider 안에서 사용해야 합니다.');
  const { updateTodo, deleteTodo } = context;

  const { id, content, isCompleted } = todo;

  return (
    <TodoItemWrapper>
      <TodoItemLink to={`/todo/${id}`} $isCompleted={isCompleted}>
        {content}
      </TodoItemLink>
      <TodoItemActions>
        <ActionButton
          $bgColor={isCompleted ? '#582be7' : '#242424'}
          onClick={() => updateTodo(id)}
        >
          {isCompleted ? '취소하기' : '완료하기'}
        </ActionButton>
        <ActionButton $bgColor="#ff4033" onClick={() => deleteTodo(id)}>
          삭제하기
        </ActionButton>
      </TodoItemActions>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TodoItemLink = styled(Link)<{ $isCompleted: boolean }>`
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? 'line-through' : 'none'};

  &:hover {
    text-decoration: underline;
  }
`;

const TodoItemActions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ActionButton = styled.button<{ $bgColor?: string }>`
  background-color: ${({ $bgColor = '#e6582b' }) => $bgColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  word-break: keep-all;

  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;
