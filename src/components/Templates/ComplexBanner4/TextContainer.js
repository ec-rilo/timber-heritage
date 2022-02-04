import styled from 'styled-components';
import StyledTemplateHead from '../TemplateHead';
import checkmarkImg from './checkmark.webp';
import { StyledBtn } from '../Buttons';
import device from '../../../assets/devices';


const Img = styled.img`
  object-fit: cover;
  width: 35px;
  height: 35px;
`
const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1.5rem;

  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`

const List = ({ className }) => {
  return (
    <ul className={className}>
      <ListItem><Img src={checkmarkImg} alt="#" />The Whistle Punk Newsletter</ListItem>
      <ListItem><Img src={checkmarkImg} alt="#" />10% Discount at THA Museum Store</ListItem>
      <ListItem><Img src={checkmarkImg} alt="#" />Exposure to trains and more</ListItem>
    </ul>
  );
};

const StyledList = styled(List)`
  color: var(--clr-cultured);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Container = ({ className }) => {
  return (
    <div className={className}>
      <StyledTemplateHead style={{ lineHeight: '1.5' }}>
        Become a Member <br></br>of THA
      </StyledTemplateHead>
      <StyledList />
      <StyledBtn light text="Become a Member" />
    </div >
  );
};

const StyledContainer = styled(Container)`
  position: relative;
  color: var(--clr-cultured);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
`;

export default StyledContainer;