import { Heading } from '../../atoms/Heading';
import { List } from '../../atoms/List';
import { tasks } from './mock';

export const Tasks: React.FC = () => {
  return (
    <div className="container mt-3">
      <Heading>
        <center>Tasks List</center>
      </Heading>
      <List>{tasks}</List>
    </div>
  );
};
