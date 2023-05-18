import { useTasksQuery } from '../../../services/tasks';
import { Heading } from '../../atoms/Heading';

export const Tasks = () => {
  const { data: tasks, isLoading } = useTasksQuery();

  return (
    <div className="container mt-3">
      <Heading>
        <center>Tasks List</center>
      </Heading>
      <ul>
        {tasks === undefined || isLoading
          ? 'Loading...'
          : tasks.map((task) => {
              return <li key={task.id}>{task.name}</li>;
            })}
      </ul>
    </div>
  );
};
