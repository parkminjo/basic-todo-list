import { useContext } from 'react';
import styled from 'styled-components';
import { File, FileCheck, Folders } from 'lucide-react';
import { TodoContext } from '../../context/TodoContext';

const TodoDashboard = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      'TodoDashboard는 반드시 TodoProvider 안에서 사용해야 합니다.'
    );
  const { todoList } = context;

  const all = todoList.length;
  const completed = todoList.filter((todo) => todo.isCompleted).length;
  const pending = all - completed;

  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard>
            <div>
              <Folders />
            </div>
            <TodoDashboardCardContent>
              {all} <br />
              <span>All Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard $bgColor="#582be7">
            <div>
              <FileCheck />
            </div>
            <TodoDashboardCardContent>
              {completed} <br />
              <span>Completed Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard $bgColor="#242424">
            <div>
              <File />
            </div>
            <TodoDashboardCardContent>
              {pending} <br />
              <span>Todo Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
      </TodoDashboardCardList>
    </TodoDashboardSection>
  );
};

const TodoDashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoDashboardHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoDashboardCardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoDashboardCardWrapper = styled.li<{ $flex?: number }>`
  flex: ${({ $flex = 1 }) => $flex};
`;

const TodoDashboardCard = styled.button<{ $bgColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 190px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ $bgColor = '#e6582b' }) => $bgColor};
  color: white;
  cursor: pointer;

  aspect-ratio: 1/1;
`;

const TodoDashboardCardContent = styled.p`
  font-size: 1.25rem;
  font-weight: 600;

  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default TodoDashboard;
