import { Link, useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import { useUpdateTodoMutation } from '../../hooks/todo/useUpdateTodoMutation';
import { useDeleteTodoMutation } from '../../hooks/todo/useDeleteTodoMutation';
import type { Todo } from '../../types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const navigate = useNavigate();

  const { id, content, completed } = todo;

  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const navigateAfterDelete = () => {
    deleteTodoMutate(id);
    navigate(PATH.HOME);
  };

  return (
    <li className="flex flex-row flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-xl">
      <Link
        to={`/todo/${id}`}
        className={
          completed ? 'line-through hover:underline' : 'none hover:underline'
        }
      >
        {content}
      </Link>
      <div className="flex flex-row flex-wrap gap-4">
        <button
          onClick={() => updateTodoMutate({ id, currentCompleted: completed })}
          className={`border-none text-white px-4 py-2 break-words align-middle hover:opacity-80 rounded-lg ${
            completed ? 'bg-[#582be7]' : 'bg-[#242424]'
          }`}
        >
          {completed ? '취소하기' : '완료하기'}
        </button>
        <button
          onClick={navigateAfterDelete}
          className="border-none text-white bg-[#ff4033] px-4 py-2 break-words align-middle hover:opacity-80 rounded-lg"
        >
          삭제하기
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
