import type { Todo } from '../../types/todo.type';

interface Props {
  todo: Todo;
  updateTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const TodoItem = ({ todo, updateTodo, deleteTodo }: Props) => {
  const { id, content, isCompleted } = todo;

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => updateTodo(id)}
      />
      <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
        {content}
      </p>
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
