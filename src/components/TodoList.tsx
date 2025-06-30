import { useState } from 'react';
import TodoForm from './TodoForm';
import type { Todo } from '../types/todo.type';

const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <div>
      <TodoForm setTodoList={setTodoList} />
      <ul>
        {todoList.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
