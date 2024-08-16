import { getGuiConfig } from '@/server/idnex'
import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return
  }
  const Data = getGuiConfig('bot')
  res.status(200).json(Data)
}
