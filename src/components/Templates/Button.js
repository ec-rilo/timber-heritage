import styled from 'styled-components';

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
  transition: background-color .3s;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-baltic-sea);
  }
`;

export default StyledBtn;