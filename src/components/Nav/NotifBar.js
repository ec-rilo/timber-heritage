import styled from 'styled-components';

const NotifBar = ({ className }) => {
  return (
    <div className={className}>
      <p>Click here for THA's response to COVID-19.</p>
    </div>
  );
};

const StyledNotifBar = styled(NotifBar)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  line-height: 1.5;
  font-size: .9rem;
  background-color: var(--clr-baltic-sea);
  color: var(--clr-cultured);
`
export default StyledNotifBar;