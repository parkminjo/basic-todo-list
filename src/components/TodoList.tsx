import TodoForm from './TodoForm';
import { useTodo } from '../hooks/useTodo';

const TodoList = () => {
  const { todoList, newTodo, handleChange, handleSubmit } = useTodo();

  return (
    <div>
      <TodoForm
        newTodo={newTodo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ul>
        {todoList.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
