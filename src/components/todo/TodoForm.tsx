import { useState } from 'react';
import { useAddTodoMutation } from '../../hooks/todo/useAddTodoMutation';

const TodoForm = () => {
  const [content, setContent] = useState('');

  const { mutate: addTodoMutate } = useAddTodoMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!content.trim()) {
      return;
    }

    addTodoMutate(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-2">
      <input
        type="text"
        value={content}
        onChange={handleChange}
        placeholder="할 일을 입력해주세요."
        className="flex-[8] text-base p-4 bg-white rounded-xl border border-[#ccc] focus:border-[#582be7] focus:outline-none"
      />
      <button
        type="submit"
        className="border-none text-white bg-[#242424] px-4 py-2 break-words align-middle hover:opacity-80 rounded-lg"
      >
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
