import { PATH } from '../../constants/path';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-[50px]">
      <div className="flex flex-row items-center max-w-3xl mx-auto p-4">
        <Link to={PATH.HOME} className="text-xl font-bold">
          TODO
        </Link>
      </div>
    </header>
  );
};

export default Header;
