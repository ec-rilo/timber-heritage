import ImageGallery from 'react-image-gallery';
import img1 from './img-1.webp'
import img2 from './img-2.webp'
import img3 from './img-3.webp'
import img4 from './img-4.webp'

const images = [
  {
    original: img1,
    originalHeight: '350px',
  },
  {
    original: img2,
    originalHeight: '350px',
  },
  {
    original: img3,
    originalHeight: '350px',
  },
  {
    original: img4,
    originalHeight: '350px',
  }
];

const ImgGallery = () => {
  return (
    <ImageGallery
      items={images}
      lazyLoad={true}
      showBullets
      showPlayButton={false}
      showFullscreenButton={false}
      autoPlay
      showNav={false}
    />
  );
};

export default ImgGallery;