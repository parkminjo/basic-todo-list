import { useTodoList } from '../../hooks/useTodoList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const { todoList, addTodo, updateTodo, deleteTodo } = useTodoList();

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoContainer;
