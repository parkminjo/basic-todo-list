import type { Todo } from '../../types/todo.type';
import TodoItem from './TodoItem';

interface Props {
  todoList: Todo[];
  updateTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const TodoList = ({ todoList, updateTodo, deleteTodo }: Props) => {
  return (
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
  );
};

export default TodoList;
