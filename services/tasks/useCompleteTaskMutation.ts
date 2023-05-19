import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import { QUERY_KEYS } from '../config';

const { TASKS_QUERY_KEY } = QUERY_KEYS;

export const markAsCompleted = async (id: number) => {
  const { data } = await axios.patch(`/api/tasks/${id}/completed`);
  return data;
};

export const useCompleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(markAsCompleted, {
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: [TASKS_QUERY_KEY] });

      const previousValue = queryClient.getQueryData<Task[]>([TASKS_QUERY_KEY]);

      queryClient.setQueryData<Task[]>([TASKS_QUERY_KEY], (old) =>
        (old || []).map((task) => {
          if (task.id === id) {
            return { ...task, isCompleted: true };
          } else {
            return { ...task };
          }
        })
      );

      return { previousValue };
    },
  });
};
