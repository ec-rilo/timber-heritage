import styled from 'styled-components';
import device from '../../assets/devices';


const HamLayer = styled.div`
  background-color: var(--clr-baltic-sea);
  height: 3px;
  width: 30px;
`;

const HamContainer = ({ className }) => {
  return (
    <div className={className}>
      <HamLayer />
      <HamLayer />
      <HamLayer />
    </div>
  );
};

const StyledHamBtn = styled(HamContainer)`
  display: none;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledHamBtn;