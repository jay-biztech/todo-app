import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import { QUERY_KEYS } from '../config';

const { TASKS_QUERY_KEY } = QUERY_KEYS;

export const deleteTask = async (id: number) => {
  const { data } = await axios.delete(`/api/tasks/${id}`);
  return data;
};

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTask, {
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: [TASKS_QUERY_KEY] });

      const previousValue = queryClient.getQueryData([TASKS_QUERY_KEY]);

      queryClient.setQueryData<Task[]>([TASKS_QUERY_KEY], (old) =>
        (old || []).filter((task) => task.id !== id)
      );

      return { previousValue };
    },
  });
};
