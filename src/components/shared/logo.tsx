import Image from 'next/image';
import React, { FC } from 'react';

type LogoProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

const Logo: FC<LogoProps> = ({
  src = '/logo.png',
  alt = 'Logo',
  width = 150,
  height = 150,
  ...props
}) => {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
};

export default Logo;
