import { useTasksQuery } from '../../../services/tasks';

export const Tasks: React.FC = () => {
  const { data: tasks, isLoading } = useTasksQuery();

  return (
    <>
      <ul>
        {tasks === undefined || isLoading
          ? 'Loading...'
          : tasks.map((task) => {
              return <li key={task.id}>{task.name}</li>;
            })}
      </ul>
    </>
  );
};
