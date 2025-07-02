import { useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import type { Todo } from '../../types/todo.type';

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (content: Todo['content']) => {
    setTodoList((prev) => [
      {
        id: crypto.randomUUID(),
        content,
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

  const value = {
    todoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
