import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSearchParams } from 'react-router-dom';
import { useTodoContext } from '../../hooks/useTodoContext';

const TodoList = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get('filter');

  const context = useTodoContext('TodoList');
  const { getFilteredTodoList } = context;

  const filteredTodoList = getFilteredTodoList(selectedFilter);

  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {filteredTodoList.length === 0 ? (
          <p>추가된 Todo 항목이 없습니다.</p>
        ) : (
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
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
  font-size: 1.25rem;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default TodoList;
