import { createContext } from 'react';
import type { Todo } from '../types/todo.type';

interface TodoContextType {
  todoList: Todo[];
  addTodo: (content: Todo['content']) => void;
  deleteTodo: (id: Todo['id']) => void;
  updateTodo: (id: Todo['id']) => void;
  getFilteredTodoList: (selectedFilter?: string | null) => Todo[];
}

export const TodoContext = createContext<TodoContextType | null>(null);
