import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import { QUERY_KEYS } from '../config';

const { TASKS_QUERY_KEY } = QUERY_KEYS;

export const patchTask = async (task: Omit<Task, 'id'>) => {
  const { data } = await axios.patch<Task>(`/api/tasks`, task);
  return data;
};

export const useUpdateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(patchTask, {
    onMutate: async (updatedTask) => {
      await queryClient.cancelQueries({ queryKey: [TASKS_QUERY_KEY] });

      const previousValue = queryClient.getQueryData<Task[]>([TASKS_QUERY_KEY]);

      // Update task

      return { previousValue };
    },
  });
};
