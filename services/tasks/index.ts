import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Task } from '../../pages/api/tasks/types';

export const fetchTasks = async () => {
  const { data } = await axios.get('/api/tasks');
  return data;
};

export const postTask = async (task: Omit<Task, 'id'>) => {
  const { data } = await axios.post<Task>('/api/tasks', task);
  return data;
};

export const deleteTask = async (id: number) => {
  const { data } = await axios.delete(`/api/tasks/${id}`);
  return data;
};

export const useTasksQuery = () =>
  useQuery<Task[]>(['tasks'], () => fetchTasks());

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
