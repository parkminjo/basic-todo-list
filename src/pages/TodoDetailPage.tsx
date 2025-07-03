import { useParams } from 'react-router-dom';

const TodoDetailPage = () => {
  const { id } = useParams();

  return <div>todo: {id}</div>;
};

export default TodoDetailPage;
