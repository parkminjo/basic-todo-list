import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants/path';
import RootLayout from './components/layout/RootLayout';
import HomePage from './pages/HomePage';
import TodoDetailPage from './pages/TodoDetailPage';
import QueryProvider from './components/provider/QueryProvider';
import { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore';

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

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
