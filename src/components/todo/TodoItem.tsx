import styled from 'styled-components';
import type { Todo } from '../../types/todo.type';

interface Props {
  todo: Todo;
  updateTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const TodoItem = ({ todo, updateTodo, deleteTodo }: Props) => {
  const { id, content, isCompleted } = todo;

  return (
    <TodoItemWrapper>
      <TodoItemText $isCompleted={isCompleted}>{content}</TodoItemText>
      <TodoItemActions>
        <ActionButton
          $bgColor={isCompleted ? '#242424' : '#582be7'}
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
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TodoItemText = styled.p<{ $isCompleted: boolean }>`
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? 'line-through' : 'none'};
`;

const TodoItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ActionButton = styled.button<{ $bgColor?: string }>`
  background-color: ${({ $bgColor = '#e6582b' }) => $bgColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;
