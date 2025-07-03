import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { TodoContext } from '../context/TodoContext';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
import { PATH } from '../constants/path';
import { COLOR } from '../styles/color';

const TodoDetailPage = () => {
  const { id } = useParams();
  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      'TodoDetailPage는 반드시 TodoProvider 안에서 사용해야 합니다.'
    );
  const {
    data: { all },
  } = context;
  const targetTodoItem = all.find((todo) => todo.id === id);

  return (
    <TodoDetailWrapper>
      {!targetTodoItem ? (
        <p>해당하는 Todo 항목이 없습니다.</p>
      ) : (
        <TodoItem todo={targetTodoItem} />
      )}
      <BackLink to={PATH.HOME}>
        <ActionButton $bgColor={COLOR.BLACK}>돌아가기</ActionButton>
      </BackLink>
    </TodoDetailWrapper>
  );
};

const TodoDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BackLink = styled(Link)`
  flex: 1;

  button {
    width: 100%;
  }
`;

export default TodoDetailPage;
