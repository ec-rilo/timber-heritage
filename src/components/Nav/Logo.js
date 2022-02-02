import styled from 'styled-components';

const StyledText = styled.p`
  font-family: var(--fnt-black);
  font-size: 2rem;
`;

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <StyledText>Timber Heritage Association</StyledText>
    </div>
  );
};

const StyledLogo = styled(Logo)`

`;

export default StyledLogo;