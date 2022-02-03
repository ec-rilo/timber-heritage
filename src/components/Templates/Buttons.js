import styled from 'styled-components';

const Btn1 = ({ className, text }) => {
  return (
    <button className={className}>
      {text}
    </button>
  );
};

const StyledBtn1 = styled(Btn1)`
  padding: 15px 20px;
  background-color: var(--clr-dust);
  border: none;
  color: var(--clr-cultured);
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color .3s;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-cultured);
    color: var(--clr-baltic-sea);
  }
`;

export { StyledBtn1 };