import type { Todo } from '../../types/todo.type';

interface Props {
  todo: Todo;
  updateTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const TodoItem = ({ todo, updateTodo, deleteTodo }: Props) => {
  const { id, content, isCompleted } = todo;

  const handleChange = () => {
    updateTodo(id);
  };

  const handleClick = () => {
    deleteTodo(id);
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {content}
      </p>
      <button onClick={handleClick}>삭제</button>
    </li>
  );
};

export default TodoItem;
