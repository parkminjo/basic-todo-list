import styled from 'styled-components';
import TodoDashboard from './TodoDashboard';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoContainer = () => {
  return (
    <TodoContainerWrapper>
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </TodoContainerWrapper>
  );
};

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default TodoContainer;
