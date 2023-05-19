import { Task } from '../../../../pages/api/tasks/types';

export type TaskListViewProps = {
  inProgressTasks: Task[];
  completedTasks: Task[];
};
