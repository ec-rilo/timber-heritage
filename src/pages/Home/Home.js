import styled from 'styled-components';
import StyledNav from '../../components/Nav/Nav';
import ImgGallery from '../../components/image-carousel/ImageGallery';
import StyledAbout from '../../components/Templates/About';



const Home = ({ className }) => {
  return (
    <div className={className}>
      <StyledNav />
      <ImgGallery />
      <StyledAbout />
    </div>
  );
};

const StyledHome = styled(Home)`
  font-family: var(--fnt-regular);
`;

export default StyledHome;