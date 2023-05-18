import { useDeleteTaskMutation } from '../../../services/tasks';

export const useTasks = () => {
  useDeleteTaskMutation(1);
  return {};
};
