import styled from 'styled-components';
import device from '../../assets/devices';
import { useTextAnimate, TextAnimateLi } from '../../assets/hooks/textAnimate';

const NavMenu = ({ className }) => {
  const data = useTextAnimate([
    { name: 'Home', isActive: true },
    { name: 'About Us', isActive: true },
    { name: 'Speeder Rides', isActive: true },
    { name: 'Events', isActive: true },
    { name: 'History', isActive: true },
    { name: 'Donate', isActive: true },
    { name: 'Contact', isActive: true },
    { name: 'Become a Member', isActive: true },
  ]);

  return (
    <ul className={className}>
      {data.content.map((item, index) => {
        return (
          <TextAnimateLi
            key={index}
            onMouseEnter={() => data.setOneActive(item.name)}
            onMouseLeave={() => data.setAllActive()}
            content={data.content}
            index={index}
          >
            {item.name}
          </TextAnimateLi>
        );
      })}
    </ul>
  );
};

const StyledNavMenu = styled(NavMenu)`
  font-family: var(--fnt-bold);
  background-color: var(--clr-cultured);
  display: flex;
  justify-content: center;
  gap: 30px;
  @media ${device.laptop} {
    display: none;
  }
`

export default StyledNavMenu;