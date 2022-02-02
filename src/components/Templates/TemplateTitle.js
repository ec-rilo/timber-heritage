import styled from 'styled-components';

const TemplateTitle = ({ className, text }) => {
  return (
    <h3 className={className}>{text}</h3>
  );
};

const StyledTemplateTitle = styled(TemplateTitle)`
  display: inline-block;
  box-sizing: border-box;
  padding-top: 20px;
  border-top: 3px solid var(--clr-dust);
  font-size: 1.4rem;
`

export default StyledTemplateTitle;