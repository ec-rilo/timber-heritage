import styled from 'styled-components';
import device from '../../assets/devices';
import StyledHamBtn from './HamBtn';
import StyledNavMenu from './Menu';

const StyledContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--clr-cloud);
  padding: 0 20px;
  justify-content: center;
  height: 60px;
  background-color: var(--clr-cultured);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: center;

  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;

const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <StyledContainer>
        <Container>
          <StyledHamBtn />
          <StyledNavMenu />
        </Container>
      </StyledContainer>
    </nav>
  );
};

const StyledNav = styled(Nav)`
  z-index: 9999;
  position: sticky;
  top: 0;
  @media ${device.laptop} {
    background-color: var(--clr-cultured);
    display: flex;
    flex-direction: column;
  }
`;

export default StyledNav;