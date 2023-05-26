import axios from 'axios';
import { useQuery } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import { QUERY_KEYS } from '../config';

const { TASKS_QUERY_KEY } = QUERY_KEYS;

export const fetchTask = async (id: string) => {
  const { data } = await axios.get(`/api/tasks/${id}`);
  return data;
};

export const useTask = (id: string) =>
  useQuery<Task>([TASKS_QUERY_KEY, id], () => fetchTask(id), {
    enabled: !!id,
    refetchOnMount: false,
  });
