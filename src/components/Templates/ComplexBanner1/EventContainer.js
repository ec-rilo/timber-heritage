import styled from 'styled-components';
import { StyledBtn1 } from '../Buttons';
import device from '../../../assets/devices';

const Img = ({ className, imgSrc, alt }) => {
  return (
    <img className={className} src={imgSrc} alt={alt} loading="lazy" />
  );
};

const StyledImg = styled(Img)`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const StyledP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-cultured);
  z-index: 2;
  font-family: var(--fnt-black);
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 1.5rem;
  &:hover {
    opacity: 1;
  }
`

const UpperContainer = ({ className, imgSrc, alt }) => {
  return (
    <div className={className}>
      <StyledP>- Add to calendar - </StyledP>
      <StyledImg imgSrc={imgSrc} alt={alt} />
    </div>
  );
};

const StyledUpperContainer = styled(UpperContainer)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    background-color: black;
    transition: opacity 0.3s ease-in-out, background-color 0.3s ease-in-out;
  }

  &:hover:before {
    background-color: black;
    opacity: .8;
  }
`;

const MidContainer = ({ className, category, content }) => {
  return (
    <div className={className}>
      <h4 style={{ color: 'var(--clr-dust)', fontFamily: 'var(--fnt-black)' }}>{category}</h4>
      <p>{content}</p>
    </div>
  );
};

const StyledMidContainer = styled(MidContainer)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--clr-cultured);
  line-height: 1.2;
`;

const SeparationLine = styled.div`
  height: 2px;
  width: 30px;
  background-color: var(--clr-dust);
`;

const ContentContainer = ({ className, date, time }) => {
  return (
    <div className={className}>
      <p>{date}</p>
      <SeparationLine />
      <p>{time}</p>
    </div>
  );
};

const StyledContentContainer = styled(ContentContainer)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--clr-cultured);

  @media ${device.mobileM} {
    flex-direction: column;
  }
`;

const LowerContainer = ({ className, date, time }) => {
  return (
    <div className={className}>
      <StyledContentContainer date={date} time={time} />
      <StyledBtn1 text='More Events' />
    </div>
  );
};

const StyledLowerContainer = styled(LowerContainer)`
  display: flex;
  justify-content: space-between;
  color: var(--clr-cultured);
`;


const Container = ({ className, category, content, src, date, time }) => {
  return (
    <div className={className}>
      <StyledMidContainer category={category} content={content} />
      <StyledLowerContainer date={date} time={time} />
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 180px;
  padding-top: 20px;
  justify-content: space-between;
`;

const EventContainer = ({ className, category, content, src, alt, date, time, fadeType }) => {
  return (
    <article className={className} data-aos={fadeType}>
      <StyledUpperContainer imgSrc={src} alt={alt} />
      <StyledContainer category={category} content={content} date={date} time={time} />
    </article>
  );
};

const StyledEventContainer = styled(EventContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 380px;
`;

export default StyledEventContainer;
