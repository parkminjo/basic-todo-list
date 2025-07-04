import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
import { PATH } from '../constants/path';
import { COLOR } from '../styles/color';
import { useTodoContext } from '../hooks/useTodoContext';
import { useEffect, useState } from 'react';
import type { Todo } from '../types/todo.type';

const TodoDetailPage = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState<Todo | null>(null);

  const context = useTodoContext('TodoDetailPage');
  const { getTodo } = context;

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await getTodo(id as string);
      setTodo(response);
    };

    fetchTodo();
  }, [id, getTodo]);

  return (
    <TodoDetailWrapper>
      {!todo ? <p>해당하는 Todo 항목이 없습니다.</p> : <TodoItem todo={todo} />}
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
