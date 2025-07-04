import { useEffect, useState } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { TODO_STATUS } from '../../constants/todo';
import type { Todo } from '../../types/todo.type';
import { todoClient } from '../../lib/todoClient';

interface Props {
  children: React.ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodoList = async () => {
    try {
      const { data } = await todoClient.get('/');
      setTodoList(data);
    } catch (error) {
      console.error('할 일 목록 불러오기 실패', error);
      alert('할 일 목록을 불러오는데 실패하였습니다.');
    }
  };

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

  const getFilteredTodoList = (selectedFilter?: string | null) => {
    switch (selectedFilter) {
      case TODO_STATUS.COMPLETED:
        return todoList.filter((todo) => todo.isCompleted);
      case TODO_STATUS.PENDING:
        return todoList.filter((todo) => !todo.isCompleted);
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
