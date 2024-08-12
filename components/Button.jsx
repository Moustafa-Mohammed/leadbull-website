import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
  children,
  type = 'button',
  onClick,
  variant = 'primary',
  size = 'sm',
  disabled = false,
  className,
}) => {
  const baseStyles =
    'inline-flex   items-center justify-center font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-500';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#53040B] to-[#0088D7] text-white hover:bg-none focus:ring-blue-500',
    secondary:
      'bg-transparent text-white hover:bg-gradient-to-r from-[#53040B] to-[#0088D7] focus:ring-blue-500',
  };

  const sizeStyles = {
    sm: 'h-12 w-12 rounded-full border-none',
    lg: 'px-5 py-3 text-base rounded-lg border border-white',
  };

  const combinedStyles = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
    { 'opacity-50 cursor-not-allowed': disabled }
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
