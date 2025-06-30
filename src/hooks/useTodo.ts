import { useState } from 'react';
import type { Todo } from '../types/todo.type';

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    setTodoList((prev) => [
      {
        id: crypto.randomUUID(),
        content: newTodo,
      },
      ...prev,
    ]);

    setNewTodo('');
  };

  return {
    todoList,
    newTodo,
    handleChange,
    handleSubmit,
  };
};
