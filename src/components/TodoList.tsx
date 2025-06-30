import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import type { Todo } from '../types/todo.type';

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo['content']) => {
    setTodoList((prev) => [
      {
        id: crypto.randomUUID(),
        content: newTodo,
        isCompleted: false,
      },
      ...prev,
    ]);
  };

  const updateTodo = (id: Todo['id']) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

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
