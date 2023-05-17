import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export const fetchTasks = async () => {
  const data = await axios.get(`${process.env.BASE_URL}/tasks`);
  const [response] = await Promise.all([data]);
  return response;
};

export default async function get(req: NextApiRequest, res: NextApiResponse) {
  const result = await fetchTasks();
  res.status(200).json(result.data);
}
