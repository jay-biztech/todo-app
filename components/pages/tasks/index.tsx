import { useTasks } from '../../../services/tasks';
import { NotFound } from '../../atoms/NotFound';
import { Task } from '../../organisms/task';
import { completed, inProgress } from './utils';

export const Tasks: React.FC = () => {
  const { data: tasks, isLoading } = useTasks();
  const inProgressTasks = inProgress(tasks);
  const completedTasks = completed(tasks);

  if (tasks?.length === 0) {
    return <NotFound>No tasks found!</NotFound>;
  }

  return (
    <>
      {isLoading ? (
        'isLoading...'
      ) : (
        <>
          {inProgressTasks && inProgressTasks.length > 0 && (
            <ul>
              <h4>In progress</h4>
              {inProgressTasks.map(({ id, name, isCompleted, date }) => {
                return <Task key={id} {...{ id, name, isCompleted, date }} />;
              })}
            </ul>
          )}

          {completedTasks && completedTasks.length > 0 && (
            <ul>
              <h4>Completed</h4>
              {completedTasks.map(({ id, name, isCompleted, date }) => {
                return <Task key={id} {...{ id, name, isCompleted, date }} />;
              })}
            </ul>
          )}
        </>
      )}
    </>
  );
};
