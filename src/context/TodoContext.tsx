import { createContext } from 'react';
import type { Todo } from '../types/todo.type';

interface TodoContextType {
  data: Record<string, Todo[]>;
  isLoading: boolean;
  addTodo: (content: Todo['content']) => void;
  updateTodo: (id: Todo['id'], currentCompleted: Todo['completed']) => void;
  deleteTodo: (id: Todo['id']) => void;
  getFilteredTodoList: (selectedFilter?: string | null) => Todo[];
}

export const TodoContext = createContext<TodoContextType | null>(null);
