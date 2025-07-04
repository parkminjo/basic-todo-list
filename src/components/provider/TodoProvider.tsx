import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { TodoContext } from '../../context/TodoContext';
import { TODO_STATUS } from '../../constants/todo';
import { TODO_LIST_TABLE } from '../../constants/supabaseTable';
import type { Todo } from '../../types/todo.type';

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodoList = async () => {
    try {
      const { data, error } = await supabase.from(TODO_LIST_TABLE).select();

      if (error) throw new Error(error.message);

      setTodoList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (content: Todo['content']) => {
    await supabase
      .from(TODO_LIST_TABLE)
      .insert({ content, is_completed: false });
  };

  const updateTodo = (id: Todo['id']) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: Todo['id']) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const getFilteredTodoList = (selectedFilter?: string | null) => {
    switch (selectedFilter) {
      case TODO_STATUS.COMPLETED:
        return todoList.filter((todo) => todo.completed);
      case TODO_STATUS.PENDING:
        return todoList.filter((todo) => !todo.completed);
      default:
        return todoList;
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const value = {
    data: {
      all: todoList,
      completed: getFilteredTodoList(TODO_STATUS.COMPLETED),
      pending: getFilteredTodoList(TODO_STATUS.PENDING),
    },
    isLoading,
    addTodo,
    updateTodo,
    deleteTodo,
    getFilteredTodoList,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
