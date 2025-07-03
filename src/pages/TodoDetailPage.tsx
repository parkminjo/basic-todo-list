import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import TodoItem, { ActionButton } from '../components/todo/TodoItem';

const TodoDetailPage = () => {
  const { id } = useParams();
  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      'TodoDetailPage는 반드시 TodoProvider 안에서 사용해야 합니다.'
    );
  const { todoList } = context;
  const targetTodoItem = todoList.find((todo) => todo.id === id);

  if (!targetTodoItem) {
    return <div>해당하는 Todo 항목이 없습니다.</div>;
  }

  return (
    <div>
      <TodoItem todo={targetTodoItem} />
      <ActionButton $bgColor="#242424">
        <Link to="/">돌아가기</Link>
      </ActionButton>
    </div>
  );
};

export default TodoDetailPage;
