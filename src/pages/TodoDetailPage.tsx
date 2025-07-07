import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
import { PATH } from '../constants/path';
import { COLOR } from '../styles/color';
import { useTodoQuery } from '../hooks/todo/useTodoQuery';

const TodoDetailPage = () => {
  const { data: todo, isPending, isError } = useTodoQuery();

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>에러 발생</div>;

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
