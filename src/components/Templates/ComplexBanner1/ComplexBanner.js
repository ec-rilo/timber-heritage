import styled from 'styled-components';
import StyledUpperContainer from './UpperContainer';
import StyledLowerContainer from './LowerContainer';
import bgImg from './background-timber.webp';

const ComplexBanner1 = ({ className }) => {
  return (
    <div className={className}>
      <StyledUpperContainer />
      <StyledLowerContainer />
    </div>
  );
};

const StyledComplexBanner1 = styled(ComplexBanner1)`
  display: flex;
  flex-direction: column;
  gap: 100px;
  background: url('${bgImg}');
  padding: 100px 15px;
  max-width: 1300px;
  margin: auto;
`;

export default StyledComplexBanner1;
