import { NextApiRequest, NextApiResponse } from 'next'
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ msg: 'hello word' })
  console.log('env', process.env)
}
