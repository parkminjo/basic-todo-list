import { useState } from 'react';
import type { Todo } from '../types/todo.type';

export const useTodoList = () => {
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

  return {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
