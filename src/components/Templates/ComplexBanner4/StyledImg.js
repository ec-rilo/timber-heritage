import styled from 'styled-components';
import volunteersImg from './volunteers.jpg';

const Img = ({ className }) => {
  return (
    <img className={className} src={volunteersImg} alt="Volunteers" loading="lazy" />
  );
};

const StyledImg = styled(Img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const ImgContainer = ({ className }) => {
  return (
    <div className={className}>
      <StyledImg />
    </div>
  );
};

const StyledImgContainer = styled(ImgContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  max-width: 450px;
  padding: 0 20px;
`;

export default StyledImgContainer;