import { ListProps } from './types';

export const List: React.FC<ListProps> = ({ children }) => {
  return (
    <ul>
      {children.map((list) => {
        return <li key={list.id}>{list.name}</li>;
      })}
    </ul>
  );
};
