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
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (content: Todo['content']) => {
    await supabase.from(TODO_LIST_TABLE).insert({ content, completed: false });
    await getTodoList(); // 새로운 할 일 목록을 가져오도록 함
  };

  const updateTodo = async (id: Todo['id'], currentCompleted: boolean) => {
    await supabase
      .from(TODO_LIST_TABLE)
      .update({ completed: !currentCompleted })
      .eq('id', id);
    await getTodoList();
  };

  const deleteTodo = async (id: Todo['id']) => {
    await supabase.from(TODO_LIST_TABLE).delete().eq('id', id);
    await getTodoList();
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
