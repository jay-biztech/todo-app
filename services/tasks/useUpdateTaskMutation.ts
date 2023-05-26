import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import { QUERY_KEYS } from '../config';

const { TASKS_QUERY_KEY } = QUERY_KEYS;

export const patchTask = async (task: Task) => {
  const { data } = await axios.patch<Task>(`/api/tasks/${task.id}`, { task });
  return data;
};

export const useUpdateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(patchTask, {
    onMutate: async (updatedTask: Task) => {
      await queryClient.cancelQueries({
        queryKey: [TASKS_QUERY_KEY, updatedTask.id],
      });

      const previousValue = queryClient.getQueryData<Task>([
        TASKS_QUERY_KEY,
        updatedTask.id,
      ]);

      queryClient.setQueryData<Task>([TASKS_QUERY_KEY, updatedTask.id], {
        ...updatedTask,
      });

      return { previousValue };
    },
  });
};
