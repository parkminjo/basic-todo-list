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
      },
      ...prev,
    ]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todoList.map(({ id, content }) => (
          <TodoItem key={id} content={content} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
