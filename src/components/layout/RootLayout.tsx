import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

// Compositional Layout
const RootLayout = ({ children }: Props) => {
  return (
    <MainContainer>
      <MainContent>{children}</MainContent>
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
`;

export default RootLayout;
