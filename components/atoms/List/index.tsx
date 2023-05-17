import { ListProps } from './types';

export const List: React.FC<ListProps> = ({ children }) => {
  return (
    <ul>
      {children.map((list, index) => {
        return <li key={index}>{list}</li>;
      })}
    </ul>
  );
};
