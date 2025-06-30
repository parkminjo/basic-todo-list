import { useState } from 'react';
import type { Todo } from '../types/todo.type';

interface Props {
  addTodo: (newTodo: Todo['content']) => void;
}

const TodoForm = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
    </form>
  );
};

export default TodoForm;
