import styled, { css } from 'styled-components';
import device from '../../assets/devices';

const imgSizeHeight = 350;
const imgSizeWidth = 400;

const Img = ({ className, src }) => {
  return (
    <img className={className} src={src} alt="" />
  );
};

const StyledImg = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const DecorativeImg = ({ className, src }) => {
  return (
    <div className={className}>
      <StyledImg src={src} />
    </div>
  );
};

const StyledDecorativeImg = styled(DecorativeImg)`
  position: absolute;
  height: ${imgSizeHeight}px;
  width: ${imgSizeWidth}px;

  ${props =>
    props.top &&
    css`
      top: -15%;
      left: -15%;
    `};

  ${props =>
    props.bottom &&
    css`
    bottom: -15%;
    right: -15%;
  `};

  @media ${device.laptop} {
    height: ${imgSizeHeight - 50}px;
    width: ${imgSizeWidth - 50}px;
  }
`;

const Deco1 = styled.div`
  width: ${imgSizeWidth}px;
  height: ${imgSizeHeight}px;

  ${(props) => {
    return `
      background-color: ${props.color};
  `;
  }}

  @media ${device.laptop} {
    height: ${imgSizeHeight - 50}px;
    width: ${imgSizeWidth - 50}px;
  }
`;

const DecoImgContainer = ({ className, src1, src2, color }) => {
  return (
    <div className={className}>
      <Deco1 color={'var(--clr-dust)'} />
      <StyledDecorativeImg src={src1} top />
      <StyledDecorativeImg src={src2} bottom />
    </div>
  );
};

const StyledDecoImgContainer = styled(DecoImgContainer)`
  position: relative;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: red;
`;

export default StyledDecoImgContainer;