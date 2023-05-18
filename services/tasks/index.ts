import axios from 'axios';
import { useQuery } from 'react-query';
import { Task } from '../../pages/api/tasks/types';

export const fetchTasks = async () => {
  const { data } = await axios.get('/api/tasks');
  return data;
};

export const saveTask = async (
  name: string,
  isCompleted: boolean,
  date: Date
) => {
  const { data } = await axios.post('/api/tasks', { name, isCompleted, date });
  return data;
};

export const deleteTask = async (id: number) => {
  const { data } = await axios.delete(`/api/tasks/${id}`);
  return data;
};

export const useTasksQuery = () =>
  useQuery<Task[]>(['tasks'], () => fetchTasks());

export const useSaveTaskQuery = (
  name: string,
  isCompleted: boolean,
  date: Date
) => useQuery(['task'], () => saveTask(name, isCompleted, date));
