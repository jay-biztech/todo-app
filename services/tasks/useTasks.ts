import axios from 'axios';
import { useQuery } from 'react-query';
import { Task } from '../../pages/api/tasks/types';
import { QUERY_KEYS } from '../config';

const { TASKS_QUERY_KEY } = QUERY_KEYS;

export const fetchTasks = async () => {
  const { data } = await axios.get('/api/tasks');
  return data;
};

export const useTasks = () =>
  useQuery<Task[]>([TASKS_QUERY_KEY], () => fetchTasks());
