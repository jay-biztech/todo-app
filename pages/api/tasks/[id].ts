import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await axios.delete(
    `${process.env.BASE_URL}/tasks/${req.query.id}`
  );
  const [response] = await Promise.all([data]);

  res.status(200).json(response.data);
}
