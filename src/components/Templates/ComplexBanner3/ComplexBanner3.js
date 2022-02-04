import styled from 'styled-components';
import StyledTemplateHead from '../TemplateHead';
import StyledTemplateTitle from '../TemplateTitle';

const TextContainer = ({ className, text }) => {
  return (
    <article className={className}>
      {text.map((paraText, index) => {
        return <p key={index}>{paraText}</p>
      })}
    </article>
  );
};

const StyledTextContainer = styled(TextContainer)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.5;
  font-size: 1rem;
`;

const Container1 = ({ className }) => {
  return (
    <div className={className}>
      <StyledTemplateTitle text="Covid-19" />
      <StyledTemplateHead text="Response to Covid-19 🦠" />
      <StyledTextContainer text={['Due to Covid 19, the Timber Heritage Shops are closed to visitors until further notice. As for our events, all dates are subject to change. Please check back before attending any activity.']} />
      <StyledTextContainer text={[' All rides currently suspended. Please check back as the schedule is updated.']} />
    </div>
  );
};

const StyledContainer1 = styled(Container1)`
  align-items: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 30px;
  max-width: 1000px;
`;

const ComplexBanner3 = ({ className }) => {
  return (
    <div className={className}>
      <StyledContainer1 />
    </div>
  );
};

const StyledComplexBanner3 = styled(ComplexBanner3)`
  display: flex;
  justify-content: center;
  max-width: 1300px;
  margin: auto;
  padding: 100px 15px;
  box-sizing: border-box;
`;

export default StyledComplexBanner3;