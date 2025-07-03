import styled from 'styled-components';
import { PATH } from '../../constants/path';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle to={PATH.HOME}>TODO</HeaderTitle>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  height: 50px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 768px;
  height: 100%;
  margin: 0 auto;
  padding: 1.5rem;
`;

const HeaderTitle = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
`;

export default Header;
