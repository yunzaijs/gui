import { NextApiRequest, NextApiResponse } from 'next'
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    //
    return
  }

  // 添加机器人
  const data = req.body
}
