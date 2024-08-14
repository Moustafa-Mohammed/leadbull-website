import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, color, size = 'sm', className, ...props }) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 hover:scale-105';

  const colorStyles = {
    gradient:
      'bg-gradient-to-r from-[#53040B] to-[#0088D7] text-white  focus:ring-blue-500',
    transparent:
      'bg-transparent text-white hover:bg-gradient-to-r from-[#53040B] to-[#0088D7] focus:ring-blue-500',
  };

  const sizeStyles = {
    sm: 'h-12 w-12 rounded-full border-none',
    lg: 'px-5 py-3 text-base rounded-lg border border-white',
  };

  const combinedStyles = classNames(
    baseStyles,
    colorStyles[color],
    sizeStyles[size],
    className,
    { 'opacity-50 cursor-not-allowed': props.disabled }
  );

  return (
    <button {...props} className={combinedStyles}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Button;
