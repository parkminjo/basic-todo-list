import { useState } from 'react';
import type { Todo } from '../../types/todo.type';

interface Props {
  addTodo: (newTodo: Todo['content']) => void;
}

const TodoForm = ({ addTodo }: Props) => {
  const [content, setContent] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!content.trim()) {
      return;
    }

    addTodo(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={handleChange} />
    </form>
  );
};

export default TodoForm;
