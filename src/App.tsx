import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants/path';
import RootLayout from './components/layout/RootLayout';
import TodoContainer from './components/todo/TodoContainer';
import TodoProvider from './components/provider/TodoProvider';

const App = () => {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<RootLayout />}>
        <Route
          index
          element={
            <TodoProvider>
              <TodoContainer />
            </TodoProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
