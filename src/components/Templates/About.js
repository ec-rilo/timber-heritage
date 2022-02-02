import styled from 'styled-components';
import device from '../../assets/devices';
import StyledTemplateTitle from './TemplateTitle';
import StyledTemplateHead from './TemplateHead';
import StyledBtn from './Button';
import woodSrc from './timber.webp';
import trainSrc from './train.webp';
import StyledDecoImgContainer from './DecoImg';


const Container2 = ({ className }) => {
  return (
    <div className={className}>
      <StyledDecoImgContainer src1={woodSrc} src2={trainSrc} color={'var(--clr-dust)'} />
    </div>
  );
};

const StyledContainer2 = styled(Container2)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex: 1;
  overflow: hidden;
  min-height: 400px;
`;

const TextContainer = ({ className, text }) => {
  return (
    <div className={className}>
      {text.map((paraText, index) => {
        return <p key={index}>{paraText}</p>
      })}
    </div>
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
      <StyledTemplateTitle text="About Us" />
      <StyledTemplateHead text="Timber Heritage Association" />
      <StyledTextContainer text={['The Timber Heritage Association (THA) is a volunteer based group whose purpose is to create awareness and appreciation for the impact of timber, logging, and railroads on the growth of Humboldt County.', 'To that effort THA is working to create a timber heritage and rail museum and develop a Humboldt Bay excursion train. The combined projects will not only impress on visitors and residents alike the tremendous role the timber industry has played in the history of California and the West, but also create a tourist destination and educational facility for all to enjoy.', 'Please consider helping us obtain (reach) our goals by becoming become a member of THA, signing up to be an active volunteer, or making a purchase from our gift store. Or contact THA to find out other ways you can support the Timber Heritage Association in its efforts to bring a world class museum and tourist train to Humboldt County. We invite you to further explore our website at your leisure.']} />
      <StyledBtn text={'Read More'} />
    </div>
  );
};

const StyledContainer1 = styled(Container1)`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`;

const About = ({ className }) => {
  return (
    <div className={className}>
      <StyledContainer1 />
      <StyledContainer2 />
    </div>
  );
};

const StyledAbout = styled(About)`
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 1300px;
  padding: 50px 15px;
  gap: 50px;

  @media ${device.laptop} {
    flex-direction: column;
    gap: 100px;
  }
`

export default StyledAbout;