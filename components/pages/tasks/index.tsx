import { useTasks } from '../../../services/tasks';
import { Task } from '../../organisms/task';

export const Tasks: React.FC = () => {
  const { data: tasks, isLoading } = useTasks();

  const inProgressTasks = () => {
    return tasks?.filter((task) => !task.isCompleted);
  };

  const completedTasks = () => {
    return tasks?.filter((task) => task.isCompleted);
  };

  return (
    <>
      {isLoading ? (
        'isLoading...'
      ) : (
        <>
          <ul>
            <h4>In progress</h4>
            {inProgressTasks()?.map(({ id, name }) => {
              return <Task key={id} {...{ id, name }} />;
            })}
          </ul>

          <ul>
            <h4>Completed</h4>
            {completedTasks()?.map(({ id, name }) => {
              return <Task key={id} {...{ id, name }} />;
            })}
          </ul>
        </>
      )}
    </>
  );
};
