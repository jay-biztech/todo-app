import { useTasks } from '../../../services/tasks';
import { NotFound } from '../../atoms/NotFound';
import { TaskCardView } from '../../organisms/CardView/tasks';
import { TaskListView } from '../../organisms/ListView/tasks';
import { completed, inProgress } from './utils';

export const Tasks: React.FC<any> = (props) => {
  const { data: tasks, isLoading } = useTasks();
  const inProgressTasks = inProgress(tasks);
  const completedTasks = completed(tasks);
  const view = props.view;

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
            <>
              {view === 'card' && (
                <TaskCardView {...{ inProgressTasks, completedTasks }} />
              )}
              {view === 'list' && (
                <TaskListView {...{ inProgressTasks, completedTasks }} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
