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

const Button: React.FC<ButtonProps> = ({ title, buttonType, type }) => {
  return (
    <button
      type={type === undefined ? 'button' : type}
      className={`btn ${buttonType} mt-3 mb-3`}
    >
      {title}
    </button>
  );
};

export default Button;
