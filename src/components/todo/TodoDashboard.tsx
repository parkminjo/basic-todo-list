import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { File, FileCheck, Folders } from 'lucide-react';
import { PATH } from '../../constants/path';
import { TODO_STATUS } from '../../constants/todo';
import { COLOR } from '../../styles/color';
import { useTodoListQuery } from '../../hooks/todo/useTodoListQuery';

const TodoDashboard = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get('filter');

  const { data: todoList, isPending, isError } = useTodoListQuery();

  const getFilteredTodoList = (filter?: string | null) => {
    if (!todoList) return [];

    if (!filter) return todoList;

    return todoList.filter((todo) =>
      filter === 'completed' ? todo.completed : !todo.completed
    );
  };

  const all = getFilteredTodoList().length;
  const completed = getFilteredTodoList(selectedFilter).length;
  const pending = all - completed;

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>에러 발생</div>;

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
              {all} <br />
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
              {completed} <br />
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
