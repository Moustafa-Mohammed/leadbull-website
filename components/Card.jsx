import React from 'react';
import Heading from '@/components/Heading';
import classNames from 'classnames';

const Card = ({ heading, body, variant = 'primary', className = '' }) => {
  const variantStyles = {
    gradient:
      'bg-gradient-to-r from-[rgba(164,0,0,0.2)] to-[rgba(1,65,103,0.2)] text-white border border-[.73px] border-[#027FCA]',
    primary: 'bg-card-bg border-none',
  };
  const baseStyles = 'rounded-lg p-4 lg:text-center flex flex-col gap-2 ';

  const headingColor = variant === 'gradient' ? '' : 'blue';

  return (
    <div className={classNames(baseStyles, variantStyles[variant], className)}>
      <Heading level={3} color={headingColor}>
        {heading}
      </Heading>
      <p className="lg:text-center font-light text-lg md:text-xl">{body}</p>
    </div>
  );
};

export default Card;
