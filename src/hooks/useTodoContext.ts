import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodoContext = (componentName: string) => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      `${componentName}는 반드시 TodoProvider 안에서 사용해야 합니다.`
    );

  return context;
};
