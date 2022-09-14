import React from 'react';
import SVG from 'react-inlinesvg';

export interface LogoProps {
  file: string;
  fallbackClassname?: string;
}

const Logo = ({ file, fallbackClassname = 'govuk-header__logotype-crown-fallback-image' }: LogoProps) => {
  const svgFile = `${process.env.PUBLIC_URL}/assets/images/${file}.svg`;
  const pngFile = `${process.env.PUBLIC_URL}/assets/images/${file}.png`;

  return (
    <SVG src={svgFile}>
      <img src={pngFile} className={fallbackClassname} alt="logo" />
    </SVG>
  );
};

export default Logo;
