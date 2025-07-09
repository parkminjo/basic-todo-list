import { Link } from 'react-router-dom';
import { File, FileCheck, Folders } from 'lucide-react';
import { PATH } from '../../constants/path';
import { TODO_STATUS } from '../../constants/todo';
import { useTodoListQuery } from '../../hooks/todo/useTodoListQuery';
import { useFilterParams } from '../../hooks/todo/useFilterParams';

const TodoDashboard = () => {
  const selectedFilter = useFilterParams();

  const {
    data: all,
    isPending: isAllPending,
    isError: isAllError,
  } = useTodoListQuery();
  const {
    data: completed,
    isPending: isCompletedPending,
    isError: isCompletedError,
  } = useTodoListQuery(TODO_STATUS.COMPLETED);
  const {
    data: pending,
    isPending,
    isError,
  } = useTodoListQuery(TODO_STATUS.PENDING);

  if (isAllPending || isCompletedPending || isPending)
    return <div>로딩 중..</div>;
  if (isAllError || isCompletedError || isError) return <div>에러 발생</div>;

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold dark:text-white">Quick Access</h2>
      <ul className="flex flex-row flex-wrap gap-4">
        <li className="flex-[2]">
          <Link
            to={PATH.HOME}
            className={`flex flex-col justify-between w-full h-[184px] p-4 bg-[#FF6600] rounded-xl text-white cursor-pointer ${
              !selectedFilter && 'underline'
            }`}
          >
            <div>
              <Folders />
            </div>
            <p className="font-semibold text-xl">
              {all.length} <br />
              <span className="text-base font-normal">All Tasks</span>
            </p>
          </Link>
        </li>

        <li className="flex-1">
          <Link
            to="?filter=completed"
            className={`flex flex-col justify-between w-full h-[184px] p-4 bg-[#582be7] rounded-xl text-white cursor-pointer ${
              selectedFilter === TODO_STATUS.COMPLETED && 'underline'
            }`}
          >
            <div>
              <FileCheck />
            </div>
            <p className="font-semibold text-xl">
              {completed.length} <br />
              <span className="text-base font-normal">Completed Tasks</span>
            </p>
          </Link>
        </li>

        <li className="flex-1">
          <Link
            to="?filter=pending"
            className={`flex flex-col justify-between w-full h-[184px] p-4 bg-[#242424] rounded-xl text-white cursor-pointer ${
              selectedFilter === TODO_STATUS.PENDING && 'underline'
            }`}
          >
            <div>
              <File />
            </div>
            <p className="font-semibold text-xl">
              {pending.length} <br />
              <span className="text-base font-normal">Todo Tasks</span>
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TodoDashboard;
