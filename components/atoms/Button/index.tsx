import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  title,
  buttonType,
  type,
  size,
  onClick,
}) => {
  return (
    <button
      type={type === undefined ? 'button' : type}
      className={`btn ${buttonType} ${size} mt-1 mb-1`}
      {...{ onClick }}
    >
      {title}
    </button>
  );
};

export default Button;
