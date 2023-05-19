import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import { QUERY_KEYS } from '../config';

const { TASKS_QUERY_KEY } = QUERY_KEYS;

export const postTask = async (task: Omit<Task, 'id'>) => {
  const { data } = await axios.post<Task>('/api/tasks', task);
  return data;
};

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postTask, {
    onMutate: async (newTask: Omit<Task, 'id'>) => {
      await queryClient.cancelQueries({ queryKey: [TASKS_QUERY_KEY] });

      const previousValue = queryClient.getQueryData<Task[]>([TASKS_QUERY_KEY]);

      queryClient.setQueryData<Task[]>([TASKS_QUERY_KEY], (old) => {
        return [...(old || []), { ...newTask, id: crypto.randomUUID() }];
      });

      return { previousValue };
    },
  });
};
