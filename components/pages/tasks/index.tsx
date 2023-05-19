import { useTasks } from '../../../services/tasks';
import { Task } from '../../organisms/task';
import { completed, inProgress } from './utils';

export const Tasks: React.FC = () => {
  const { data: tasks, isLoading } = useTasks();
  const inProgressTasks = inProgress(tasks);
  const completedTasks = completed(tasks);

  return (
    <>
      {isLoading ? (
        'isLoading...'
      ) : (
        <>
          <ul>
            <h4>In progress</h4>
            {inProgressTasks?.map(({ id, name }) => {
              return <Task key={id} {...{ id, name }} />;
            })}
          </ul>

          <ul>
            <h4>Completed</h4>
            {completedTasks?.map(({ id, name }) => {
              return <Task key={id} {...{ id, name }} />;
            })}
          </ul>
        </>
      )}
    </>
  );
};
