import { useMutation, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import axios from 'axios';

export const postTask = async (task: Omit<Task, 'id'>) => {
  const { data } = await axios.post<Task>('/api/tasks', task);
  return data;
};

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postTask, {
    onMutate: async (newTask: Omit<Task, 'id'>) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousValue = queryClient.getQueryData<Task[]>(['tasks']);

      queryClient.setQueryData<Task[]>(['tasks'], (old) => {
        return [...(old || []), { ...newTask, id: crypto.randomUUID() }];
      });

      return { previousValue };
    },
  });
};
