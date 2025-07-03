import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

// Compositional Layout
const RootLayout = () => {
  return (
    <MainContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  min-height: 100vh;
  background-color: #f6f5f8;
`;

const MainContent = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 1.5rem;
`;

export default RootLayout;
