import { ButtonType } from '.';

export type ButtonProps = {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  buttonType?: ButtonType;
  onClick?: () => void;
};
