import Image, { ImageProps } from 'next/image';

export default function CustomImage({ src, ...props }: ImageProps) {
  const modifiedSrc = src.startsWith('/') 
    ? `/wine-bar-landing${src}`
    : `/wine-bar-landing/${src}`;

  return <Image src={modifiedSrc} {...props} />;
} 