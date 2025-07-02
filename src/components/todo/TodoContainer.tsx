import styled from 'styled-components';
import { useTodoList } from '../../hooks/useTodoList';
import TodoDashboard from './TodoDashboard';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  const { todoList, addTodo, updateTodo, deleteTodo } = useTodoList();

  return (
    <TodoContainerWrapper>
      <TodoDashboard todoList={todoList} />
      <TodoList
        todoList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      <TodoForm addTodo={addTodo} />
    </TodoContainerWrapper>
  );
};

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default TodoContainer;
