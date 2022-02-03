import styled, { css } from 'styled-components';
import StyledLogo from './Logo';
import device from '../../assets/devices';
import StyledHamBtn from './HamBtn';
import StyledNotifBar from './NotifBar';
import StyledNavMenu from './Menu';

const StyledContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--clr-cloud);
  padding: 0 20px;
  justify-content: center;
  height: 60px;
  background-color: var(--clr-cultured);
  ${props =>
    props.dark &&
    css`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    background-color: var(--clr-dark-blue-grey);
    color: var(--clr-cultured);
    align-items: center;
    height: auto;
    padding: 35px 0;
    `};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: center;

  @media ${device.laptop} {
    justify-content: flex-end;
  }

  ${props =>
    props.hero &&
    css`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    `};
`;

const NavMobile = ({ className }) => {
  return (
    <nav className={className}>
      <StyledNotifBar />
      <StyledContainer dark>
        <Container hero>
          <StyledLogo small />
          <p>Preserve, interpret, and celebrate our timber heritage</p>
        </Container>
      </StyledContainer>
      <StyledContainer>
        <Container>
          <StyledHamBtn />
          <StyledNavMenu />
        </Container>
      </StyledContainer>
    </nav>
  );
};

const StyledNavMobile = styled(NavMobile)`
  @media ${device.laptop} {
    background-color: var(--clr-cultured);
    display: flex;
    flex-direction: column;
  }
`;

const Nav = ({ className }) => {
  return (
    <div className={className}>
      <StyledNavMobile />
    </div>
  );
};

const StyledNav = styled(Nav)`
`;



export default StyledNav;