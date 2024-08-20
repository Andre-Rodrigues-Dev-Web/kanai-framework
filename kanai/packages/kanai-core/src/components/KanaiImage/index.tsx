import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ContainerImage } from './style';

interface MyImageProps {
  image: {
    alt: string;
    height: number | string;
    src: string;
    width: number | string;
    caption: string;
  };
}

const KanaiImage: React.FC<MyImageProps> = ({ image }) => (
  <ContainerImage>
    <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src}
      width={image.width}
    />
    <span>{image.caption}</span>
  </ContainerImage>
);

export default KanaiImage;
