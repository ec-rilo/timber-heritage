import styled from 'styled-components';

const TemplateHead = ({ className, text }) => {
  return (
    <h2 className={className}>{text}</h2>
  );
};

const StyledTemplateHead = styled(TemplateHead)`
  font-size: 2.5rem;
  font-family: var(--fnt-bold);
`

export default StyledTemplateHead;