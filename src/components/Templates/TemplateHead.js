import styled from 'styled-components';

const TemplateHead = ({ className, text }) => {
  return (
    <h3 className={className}>{text}</h3>
  );
};

const StyledTemplateHead = styled(TemplateHead)`
  font-size: 2.5rem;
  font-family: var(--fnt-bold);
`

export default StyledTemplateHead;