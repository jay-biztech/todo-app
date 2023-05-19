import { Task } from '../../../../pages/api/tasks/types';

export type TaskDetailViewProps = {
  inProgressTasks: Task[];
  completedTasks: Task[];
};
