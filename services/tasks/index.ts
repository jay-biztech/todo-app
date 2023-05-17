import { useQuery } from 'react-query';
import axios from 'axios';
import { Task } from '../../pages/api/tasks/types';

export const fetchTasks = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/tasks`);
  return data;
};

export const useTasksQuery = () =>
  useQuery<Task[]>(['tasks'], () => fetchTasks());
