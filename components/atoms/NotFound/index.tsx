import { NotFoundProps } from './types';

export const NotFound: React.FC<NotFoundProps> = ({ children }) => {
  return <h5 className="mt-3">{children}</h5>;
};
