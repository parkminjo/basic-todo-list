import styled from 'styled-components';
import { FileCheck, Laptop, Video } from 'lucide-react';

interface Props {
  all: number;
  completed: number;
  pending: number;
}

const TodoDashboard = ({ all = 0, completed = 0, pending = 0 }: Props) => {
  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard>
            <div>
              <FileCheck />
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
              <Laptop />
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
              <Video />
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
