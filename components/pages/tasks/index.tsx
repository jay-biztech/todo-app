import { Heading } from '../../atoms/Heading';
import { List } from '../../atoms/List';

export const Tasks: React.FC = () => {
  return (
    <div className="container mt-3">
      <Heading>Task List</Heading>
      <List>{['Swimming', 'Learn Next JS']}</List>
    </div>
  );
};
