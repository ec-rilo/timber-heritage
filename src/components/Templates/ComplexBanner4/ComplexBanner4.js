import styled from 'styled-components';
import StyledImgContainer from './StyledImg';
import woodSrc from './background-timber.webp';
import device from '../../../assets/devices';
import StyledContainer from './TextContainer';



const ComplexBanner4 = ({ className }) => {
  return (
    <div className={className}>
      <StyledImgContainer />
      <StyledContainer />
    </div>
  );
};

const StyledComplexBanner4 = styled(ComplexBanner4)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  height: 510px;
  max-width: 1300px;
  margin: auto;
  background: url('${woodSrc}');
  padding: 60px 15px 15px 15px;
  box-sizing: border-box;
  gap: 100px;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 100px 15px;
    gap: 80px;
  }
`;

export default StyledComplexBanner4;
