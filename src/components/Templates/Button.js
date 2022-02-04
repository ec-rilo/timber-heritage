import styled, { css } from 'styled-components';

const Btn = ({ className, text }) => {
  return (
    <button className={className}>
      {text}
    </button>
  );
};

const StyledBtn = styled(Btn)`
  padding: 15px 50px;
  background-color: var(--clr-dust);
  border: none;
  color: var(--clr-cultured);
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-baltic-sea);
  }

  ${props =>
    props.light &&
    css`
      &:hover {
        background-color: var(--clr-cultured);
        color: var(--clr-baltic-sea);
      }
    `};
`;

export default StyledBtn;