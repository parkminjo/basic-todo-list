import { useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { TODO_STATUS } from '../../constants/todo';
import { todoClient } from '../../lib/todoClient';
import { TODO_API } from '../../constants/apiPath';
import type { Todo } from '../../types/todo.type';

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodo = async (id: Todo['id']) => {
    try {
      const { data }: { data: Todo } = await todoClient.get(TODO_API.BY_ID(id));
      return data;
    } catch (error) {
      console.error('할 일 불러오기 실패', error);
      throw error;
    }
  };

  const getTodoList = async () => {
    try {
      const { data }: { data: Todo[] } = await todoClient.get(TODO_API.ROOT);
      setTodoList(data);
    } catch (error) {
      console.error('할 일 목록 불러오기 실패', error);
      alert('할 일 목록을 불러오는데 실패하였습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async (content: Todo['content']) => {
    try {
      await todoClient.post(TODO_API.ROOT, {
        content,
        completed: false,
      });

      await getTodoList();
    } catch (error) {
      console.error('할 일 목록 추가 실패', error);
      alert('할 일을 추가하는데 실패하였습니다.');
    }
  };

  const updateTodo = async (
    id: Todo['id'],
    currentCompleted: Todo['completed']
  ) => {
    try {
      await todoClient.patch(TODO_API.BY_ID(id), {
        completed: !currentCompleted,
      });

      await getTodoList();
    } catch (error) {
      console.error('할 일 수정 실패', error);
      alert('할 일을 수정하는데 실패하였습니다.');
    }
  };

  const deleteTodo = async (id: Todo['id']) => {
    try {
      await todoClient.delete(TODO_API.BY_ID(id));

      await getTodoList();
    } catch (error) {
      console.error('할 일 삭제 실패', error);
      alert('할 일을 삭제하는데 실패하였습니다.');
    }
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
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo,
    getFilteredTodoList,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
