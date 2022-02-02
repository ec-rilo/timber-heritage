import styled from 'styled-components';

const TemplateHead = ({ className, text }) => {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const StyledTemplateHead = styled(TemplateHead)`
  font-size: 3rem;
`

export default StyledTemplateHead;