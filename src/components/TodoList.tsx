import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import { useTodoList } from '../hooks/useTodoList';

const TodoList = () => {
  const { todoList, addTodo, updateTodo, deleteTodo } = useTodoList();

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
