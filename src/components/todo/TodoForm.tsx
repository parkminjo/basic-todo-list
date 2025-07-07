import { useState } from 'react';
import styled from 'styled-components';
import { ActionButton } from './TodoItem';
import { COLOR } from '../../styles/color';
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
    <div>
      <TodoFormWrapper onSubmit={handleSubmit}>
        <TodoFormInput
          type="text"
          value={content}
          onChange={handleChange}
          placeholder="할 일을 입력해주세요."
        />
        <SubmitButton $bgColor={COLOR.BLACK}>추가하기</SubmitButton>
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
  border: 1px solid ${COLOR.GRAY01};
  border-radius: 0.5rem;

  &::placeholder {
    color: ${COLOR.GRAY02};
  }

  &:focus {
    border-color: ${COLOR.PURPLE};
    outline: none;
  }
`;

const SubmitButton = styled(ActionButton)`
  flex: 1;
  text-align: center;
`;

export default TodoForm;
