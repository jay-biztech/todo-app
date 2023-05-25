import { Task } from '../task';
import { TaskCardViewProps } from './types';

export const TaskCardView: React.FC<TaskCardViewProps> = ({
  inProgressTasks,
  completedTasks,
}) => {
  return (
    <>
      {inProgressTasks && inProgressTasks.length > 0 && (
        <>
          <h4>In progress</h4>
          <hr />
          <div className="d-flex justify-content-around">
            {inProgressTasks.map(({ id, name, isCompleted, dueDate }) => {
              return <Task key={id} {...{ id, name, isCompleted, dueDate }} />;
            })}
          </div>
        </>
      )}

      {completedTasks && completedTasks.length > 0 && (
        <>
          <h4>Completed</h4>
          <hr />
          <div className="d-flex justify-content-around">
            {completedTasks.map(({ id, name, isCompleted, dueDate }) => {
              return <Task key={id} {...{ id, name, isCompleted, dueDate }} />;
            })}
          </div>
        </>
      )}
    </>
  );
};
