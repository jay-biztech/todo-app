import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';

export const deleteTask = async (id: number) => {
  const { data } = await axios.delete(`/api/tasks/${id}`);
  return data;
};

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTask, {
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['tasks'] });

      const previousValue = queryClient.getQueryData(['tasks']);

      queryClient.setQueryData<Task[]>(['tasks'], (old) =>
        (old || []).filter((task) => task.id !== id)
      );

      return { previousValue };
    },
  });
};
