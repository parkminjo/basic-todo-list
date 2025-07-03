import { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { File, FileCheck, Folders } from 'lucide-react';
import { TodoContext } from '../../context/TodoContext';
import { PATH } from '../../constants/path';
import { TODO_STATUS } from '../../constants/todo';
import { COLOR } from '../../styles/color';

const TodoDashboard = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get('filter');

  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      'TodoDashboard는 반드시 TodoProvider 안에서 사용해야 합니다.'
    );
  const {
    data: { all, completed, pending },
  } = context;

  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard to={PATH.HOME} $isSelected={!selectedFilter}>
            <div>
              <Folders />
            </div>
            <TodoDashboardCardContent>
              {all.length} <br />
              <span>All Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard
            to="?filter=completed"
            $isSelected={selectedFilter === TODO_STATUS.COMPLETED}
            $bgColor={COLOR.PURPLE}
          >
            <div>
              <FileCheck />
            </div>
            <TodoDashboardCardContent>
              {completed.length} <br />
              <span>Completed Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper>
          <TodoDashboardCard
            to="?filter=pending"
            $isSelected={selectedFilter === TODO_STATUS.PENDING}
            $bgColor={COLOR.BLACK}
          >
            <div>
              <File />
            </div>
            <TodoDashboardCardContent>
              {pending.length} <br />
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
  font-size: 1rem;
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

const TodoDashboardCard = styled(Link)<{
  $bgColor?: string;
  $isSelected?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 190px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${({ $bgColor = COLOR.ORANGE }) => $bgColor};
  color: white;
  cursor: pointer;
  text-decoration: ${({ $isSelected }) => ($isSelected ? 'underline' : 'none')};

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
