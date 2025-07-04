import { useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { TODO_STATUS } from '../../constants/todo';
import type { Todo } from '../../types/todo.type';
import { todoClient } from '../../lib/todoClient';
import { TODO_API } from '../../constants/apiPath';

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodoList = async () => {
    try {
      const { data } = await todoClient.get(TODO_API.ROOT);
      setTodoList(data);
    } catch (error) {
      console.error('할 일 목록 불러오기 실패', error);
      alert('할 일 목록을 불러오는데 실패하였습니다.');
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

  const updateTodo = async (id: Todo['id'], completed: Todo['completed']) => {
    try {
      await todoClient.patch(TODO_API.BY_ID(id), {
        completed: !completed,
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
    addTodo,
    updateTodo,
    deleteTodo,
    getFilteredTodoList,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
