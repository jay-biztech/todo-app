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

export enum Size {
  Small = 'btn-sm',
  Medium = 'btn-md',
  Large = 'btn-lg',
}

export type ButtonProps = {
  title: string;
  type?: 'submit' | 'reset' | 'button';
  buttonType?: ButtonType;
  size?: Size;
  onClick?: () => void;
};
