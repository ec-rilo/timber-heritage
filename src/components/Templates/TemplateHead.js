import styled from 'styled-components';

const TemplateHead = ({ className, text }) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const StyledTemplateHead = styled(TemplateHead)`
  font-size: 2.5rem;
  font-family: var(--fnt-bold);
`

export default StyledTemplateHead;