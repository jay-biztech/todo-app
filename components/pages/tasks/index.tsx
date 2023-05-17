import { useTasksQuery } from '../../../services/tasks';
import { Heading } from '../../atoms/Heading';
import { List } from '../../atoms/List';

export const Tasks = () => {
  const { data: tasks } = useTasksQuery();

  return (
    <div className="container mt-3">
      <Heading>
        <center>Tasks List</center>
      </Heading>
      <ul>
        {tasks &&
          tasks.map((task) => {
            return <li key={task.id}>{task.name}</li>;
          })}
      </ul>
    </div>
  );
};
