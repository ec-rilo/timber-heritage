import styled from 'styled-components';
import { StyledBtn1 } from '../Buttons';
import device from '../../../assets/devices';

const Img = ({ className, imgSrc }) => {
  return (
    <img className={className} src={imgSrc} alt="#" loading="lazy" />
  );
};

const StyledImg = styled(Img)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const UpperContainer = ({ className, imgSrc }) => {
  return (
    <div className={className}>
      <StyledImg imgSrc={imgSrc} />
    </div>
  );
};

const StyledUpperContainer = styled(UpperContainer)`
  height: 200px;
`;

const MidContainer = ({ className, category, content }) => {
  return (
    <div className={className}>
      <h4 style={{ color: 'var(--clr-dust)' }}>{category}</h4>
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

const EventContainer = ({ className, category, content, src, date, time, fadeType }) => {
  return (
    <article className={className} data-aos={fadeType}>
      <StyledUpperContainer imgSrc={src} />
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
