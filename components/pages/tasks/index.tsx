import { useTasks } from '../../../services/tasks';
import { NotFound } from '../../atoms/NotFound';
import { TaskListView } from '../../organisms/ListView/tasks';
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
          {inProgressTasks && completedTasks && (
            <TaskListView {...{ inProgressTasks, completedTasks }} />
          )}
        </>
      )}
    </>
  );
};
