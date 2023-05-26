import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { Task } from './types';

export const fetchTask = async (id: string) => {
  const data = await axios.get(`${process.env.BASE_URL}/tasks/${id}`);
  const [response] = await Promise.all([data]);
  return response;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const id = req.query.id as string;
    const result = await fetchTask(id);

    res.status(200).json(result.data);
  } else if (req.method === 'PATCH') {
    const data = await axios.patch(
      `${process.env.BASE_URL}/tasks/${req.query.id}`,
      req.body.task
    );
    const [response] = await Promise.all([data]);

    res.status(200).json(response.data);
  } else if (req.method === 'DELETE') {
    const data = await axios.delete(
      `${process.env.BASE_URL}/tasks/${req.query.id}`
    );
    const [response] = await Promise.all([data]);

    res.status(200).json(response.data);
  }
}
