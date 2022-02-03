import styled from 'styled-components';
import StyledNotifBar from './NotifBar';
import StyledLogo from './Logo';
import device from '../../assets/devices';

const StyledContainer = styled.div`
  border-bottom: 1px solid var(--clr-cloud);
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  background-color: var(--clr-dark-blue-grey);
  color: var(--clr-cultured);
  align-items: center;
  height: auto;
  padding: 35px 20px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;

  @media ${device.laptop} {
    justify-content: flex-end;
  }
`;

const Header = ({ className }) => {
  return (
    <div className={className}>
      <StyledNotifBar />
      <StyledContainer dark>
        <Container hero>
          <StyledLogo small />
          <p>Preserve, interpret, and celebrate our timber heritage</p>
        </Container>
      </StyledContainer>
    </div>
  );
};

export default Header;