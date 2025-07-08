import { Link } from 'react-router-dom';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';
import { PATH } from '../constants/path';
import { COLOR } from '../styles/color';
import { useTodoQuery } from '../hooks/todo/useTodoQuery';

const TodoDetailPage = () => {
  const { data: todo, isPending, isError } = useTodoQuery();

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>에러 발생</div>;

  return (
    <section className="flex flex-col gap-4">
      {!todo ? <p>해당하는 Todo 항목이 없습니다.</p> : <TodoItem todo={todo} />}
      <Link to={PATH.HOME}>
        <ActionButton $bgColor={COLOR.BLACK}>돌아가기</ActionButton>
      </Link>
    </section>
  );
};

export default TodoDetailPage;
