import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import { COLOR } from '../../styles/color';
import { useTodoContext } from '../../hooks/useTodoContext';
import type { Todo } from '../../types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const navigate = useNavigate();

  const context = useTodoContext('TodoItem');
  const { updateTodo, deleteTodo } = context;

  const { id, content, isCompleted } = todo;

  const navigateAfterDelete = () => {
    deleteTodo(id);
    navigate(PATH.HOME);
  };

  return (
    <TodoItemWrapper>
      <TodoItemLink to={`/todo/${id}`} $isCompleted={isCompleted}>
        {content}
      </TodoItemLink>
      <TodoItemActions>
        <ActionButton
          $bgColor={isCompleted ? COLOR.PURPLE : COLOR.BLACK}
          onClick={() => updateTodo(id)}
        >
          {isCompleted ? '취소하기' : '완료하기'}
        </ActionButton>
        <ActionButton $bgColor={COLOR.RED} onClick={navigateAfterDelete}>
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
  background-color: ${({ $bgColor = COLOR.ORANGE }) => $bgColor};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  word-break: keep-all;
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;
