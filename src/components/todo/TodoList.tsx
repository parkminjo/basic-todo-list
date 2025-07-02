import styled from 'styled-components';
import type { Todo } from '../../types/todo.type';
import TodoItem from './TodoItem';

interface Props {
  todoList: Todo[];
  updateTodo: (id: Todo['id']) => void;
  deleteTodo: (id: Todo['id']) => void;
}

const TodoList = ({ todoList, updateTodo, deleteTodo }: Props) => {
  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;
