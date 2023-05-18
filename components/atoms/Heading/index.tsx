import { HeadingProps } from './types';

export const Heading: React.FC<HeadingProps> = ({ children }) => {
  return <h1>{children}</h1>;
};
