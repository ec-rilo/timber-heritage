import styled from 'styled-components';
import StyledNav from '../../components/Nav/Nav';
import Header from '../../components/Nav/Header';
import ImgGallery from '../../components/image-carousel/ImageGallery';
import StyledAbout from '../../components/Templates/About';
import StyledComplexBanner1 from '../../components/Templates/ComplexBanner1/ComplexBanner';
import StyledComplexBanner3 from '../../components/Templates/ComplexBanner3/ComplexBanner3';
import StyledComplexBanner4 from '../../components/Templates/ComplexBanner4/ComplexBanner4';


const Home = ({ className }) => {
  return (
    <div className={className}>
      <Header />
      <StyledNav />
      <ImgGallery />
      <StyledAbout />
      <StyledComplexBanner1 />
      <StyledComplexBanner3 />
      <StyledComplexBanner4 />
    </div>
  );
};

const StyledHome = styled(Home)`
  font-family: var(--fnt-regular);
`;

export default StyledHome;