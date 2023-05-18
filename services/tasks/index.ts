import axios from 'axios';
import { useQuery } from 'react-query';
import { Task } from '../../pages/api/tasks/types';

export const fetchTasks = async () => {
  const { data } = await axios.get('/api/tasks');
  return data;
};

export const saveTask = async (name: string) => {
  const { data } = await axios.post('/api/tasks', { name });
  return data;
};

export const useTasksQuery = () =>
  useQuery<Task[]>(['tasks'], () => fetchTasks());

export const useSaveTaskQuery = (name: string) =>
  useQuery(['task'], () => saveTask(name));
