import Image, { ImageProps } from 'next/image';
import { StaticImageData } from 'next/image';

type CustomImageProps = Omit<ImageProps, 'src'> & {
  src: string | StaticImageData;
};

export default function CustomImage({ src, ...props }: CustomImageProps) {
  if (typeof src === 'string') {
    const modifiedSrc = src.startsWith('/') 
      ? `/wine-bar-landing${src}` 
      : `/wine-bar-landing/${src}`;
    return <Image src={modifiedSrc} {...props} />;
  }
  
  return <Image src={src} {...props} />;
} 