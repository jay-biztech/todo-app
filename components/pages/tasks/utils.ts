import { Task } from '../../../pages/api/tasks/types';

export const inProgress = (tasks?: Task[]) => {
  return tasks?.filter((task) => !task.isCompleted);
};

export const completed = (tasks?: Task[]) => {
  return tasks?.filter((task) => task.isCompleted);
};
