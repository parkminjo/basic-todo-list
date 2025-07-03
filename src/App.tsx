import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants/path';
import RootLayout from './components/layout/RootLayout';
import HomePage from './pages/HomePage';
import TodoDetailPage from './pages/TodoDetailPage';
import TodoProvider from './components/provider/TodoProvider';

const App = () => {
  return (
    <TodoProvider>
      <Routes>
        <Route path={PATH.HOME} element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.TODO_DETAIL} element={<TodoDetailPage />} />
        </Route>
      </Routes>
    </TodoProvider>
  );
};

export default App;
