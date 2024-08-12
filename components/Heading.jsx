import classNames from 'classnames';
import React from 'react';

const Heading = ({
  level = 1,
  children,
  color = 'text-white',
  size = 'sm',
  className = '',
}) => {
  const Tag = `h${level}`;

  const colorStyles = {
    blue: ' text-[#027FCA]',
    gradient:
      'bg-clip-text text-transparent bg-gradient-to-br from-[#FF0000] via-[#027FCA] to-[#027FCA] ',
  };
  const sizesStyles = {
    sm: ' text-lg md:text-xl lg:text-2xl',
    lg: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  };

  const baseStyles = 'font-bold';

  const combinedStyles = classNames(
    baseStyles,
    colorStyles[color],
    sizesStyles[size],
    className
  );

  return <Tag className={combinedStyles}>{children}</Tag>;
};

export default Heading;
