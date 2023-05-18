import axios from 'axios';
import { Task } from '../../pages/api/tasks/types';
import { useQuery } from 'react-query';

export const fetchTasks = async () => {
  const { data } = await axios.get('/api/tasks');
  return data;
};

export const useTasks = () => useQuery<Task[]>(['tasks'], () => fetchTasks());
