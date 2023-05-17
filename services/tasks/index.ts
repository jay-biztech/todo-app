import axios from 'axios';

export const fetchTasks = async () => {
  const result = await axios.get(`${process.env.BASE_URL}/tasks`);
  const [response] = await Promise.all([result]);
  return response;
};
