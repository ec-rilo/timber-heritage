import styled from 'styled-components';
import TemplateTitle from '../TemplateTitle';
import TemplateHead from '../TemplateHead';


const UpperContainer = ({ className }) => {
  return (
    <div className={className}>
      <TemplateTitle text='Current Events' />
      <TemplateHead text='February Events' />
    </div>
  );
};

const StyledUpperContainer = styled(UpperContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  color: var(--clr-cultured);
`;

export default StyledUpperContainer;
