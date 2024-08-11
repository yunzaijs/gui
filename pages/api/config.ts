import { getConfig } from '@/server/idnex';
import { NextApiRequest, NextApiResponse } from 'next';
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ msg: 'hello word' })
  const config = getConfig()
  if (config) console.log(config)
}
