import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants/path';
import RootLayout from './components/layout/RootLayout';
import HomePage from './pages/HomePage';
import TodoDetailPage from './pages/TodoDetailPage';
import QueryProvider from './components/provider/QueryProvider';

const App = () => {
  return (
    <QueryProvider>
      <Routes>
        <Route path={PATH.HOME} element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.TODO_DETAIL} element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
};

export default App;
