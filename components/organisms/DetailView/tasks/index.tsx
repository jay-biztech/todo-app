import { Task } from '../task';
import { TaskDetailViewProps } from './types';

export const TaskDetailView: React.FC<TaskDetailViewProps> = ({
  inProgressTasks,
  completedTasks,
}) => {
  return (
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
  );
};
