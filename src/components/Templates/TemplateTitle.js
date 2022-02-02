import styled from 'styled-components';

const TemplateTitle = ({ className, text }) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
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