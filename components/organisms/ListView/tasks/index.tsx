import { Task } from '../task';
import { TaskListViewProps } from './types';

export const TaskListView: React.FC<TaskListViewProps> = ({
  inProgressTasks,
  completedTasks,
}) => {
  return (
    <>
      {inProgressTasks && inProgressTasks.length > 0 && (
        <ul>
          <h4>In progress</h4>
          <hr />
          {inProgressTasks.map(({ id, name, isCompleted, dueDate }) => {
            return <Task key={id} {...{ id, name, isCompleted, dueDate }} />;
          })}
        </ul>
      )}

      {completedTasks && completedTasks.length > 0 && (
        <ul>
          <h4>Completed</h4>
          <hr />
          {completedTasks.map(({ id, name, isCompleted, dueDate }) => {
            return <Task key={id} {...{ id, name, isCompleted, dueDate }} />;
          })}
        </ul>
      )}
    </>
  );
};
