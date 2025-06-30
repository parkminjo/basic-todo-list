import TodoForm from './TodoForm';
import { useTodo } from '../hooks/useTodo';
import TodoItem from './TodoItem';

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
          <TodoItem key={id} content={content} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
