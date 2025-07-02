import { useState } from 'react';
import styled from 'styled-components';
import { ActionButton } from './TodoItem';
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
    <div>
      <TodoFormWrapper onSubmit={handleSubmit}>
        <TodoFormInput
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="할 일을 입력해주세요."
        />
        <SubmitButton $bgColor="#582be7">추가하기</SubmitButton>
      </TodoFormWrapper>
    </div>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TodoFormInput = styled.input`
  flex: 8;
  font-size: 0.5rem 1rem;
  padding: 1rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 0.5rem;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #582be7;
    outline: none;
  }
`;

const SubmitButton = styled(ActionButton)`
  flex: 1;
  text-align: center;
`;

export default TodoForm;
