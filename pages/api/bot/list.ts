import { getGuiConfig } from '@/server/idnex'
import { NextApiRequest, NextApiResponse } from 'next'

const Data = [
  {
    bot_name: '云崽Next',
    bot_username: '794161739',
    mastear_name: '柠檬',
    mastear_username: '1714713638',
    status: '1',
    time: '9999',
    create_time: '2024年8月11日'
  }
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return
  }
  const Data = getGuiConfig('bot')
  res.status(200).json(Data)
}
