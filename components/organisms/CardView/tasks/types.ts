import { Task } from '../../../../pages/api/tasks/types';

export type TaskCardViewProps = {
  inProgressTasks: Task[];
  completedTasks: Task[];
};
