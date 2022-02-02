import styled, { css } from 'styled-components';

const StyledTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: var(--fnt-bold);
  font-size: 3rem;
  text-align: center;

  ${props =>
    props.small &&
    css`
      font-size: 1.5rem;
      line-height 1.5;
  `
  };
`;

export { StyledTitle };