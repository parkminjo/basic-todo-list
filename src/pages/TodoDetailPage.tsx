import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { COLOR } from '../styles/color';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
import { PATH } from '../constants/path';
import { useTodoContext } from '../hooks/useTodoContext';
import type { Todo } from '../types/todo.type';

const TodoDetailPage = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const context = useTodoContext('TodoDetailPage');
  const { getTodoById } = context;

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const todoData = await getTodoById(Number(id));
        setTodo(todoData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodo();
  }, [id, getTodoById]);

  if (isLoading) return <div>로딩 중..</div>;

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
