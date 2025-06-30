import React from 'react';

interface Props {
  content: string;
}

const TodoItem = ({ content }: Props) => {
  return <li>{content}</li>;
};

export default React.memo(TodoItem);
