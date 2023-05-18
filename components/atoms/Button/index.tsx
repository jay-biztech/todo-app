import React from 'react';
import { ButtonProps } from './types';

export enum ButtonType {
  Primary = 'btn-primary',
  Secondary = 'btn-secondary',
  Success = 'btn-success',
  Danger = 'btn-danger',
  Warning = 'btn-warning',
  Info = 'btn-info',
  Light = 'btn-light',
  Dark = 'btn-dark',
  Link = 'btn-link',
}

const Button: React.FC<ButtonProps> = ({
  title,
  buttonType,
  type,
  onClick,
}) => {
  return (
    <button
      type={type === undefined ? 'button' : type}
      className={`btn ${buttonType} mt-1 mb-1`}
      {...{ onClick }}
    >
      {title}
    </button>
  );
};

export default Button;
