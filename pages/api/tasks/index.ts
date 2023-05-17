import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchTasks } from '../../../services/tasks';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetchTasks();
  res.status(200).json(result.data);
}
