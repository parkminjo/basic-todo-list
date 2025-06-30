import React from 'react';
import type { Todo } from '../types/todo.type';

interface Props {
  todo: Todo;
  updateTodo: (id: Todo['id']) => void;
}

const TodoItem = ({ todo, updateTodo }: Props) => {
  const { id, content, isCompleted } = todo;

  const handleChange = () => {
    updateTodo(id);
  };

  return (
    <li>
      <input type="checkbox" checked={isCompleted} onChange={handleChange} />
      {content}
      <button>삭제</button>
    </li>
  );
};

export default React.memo(TodoItem);
