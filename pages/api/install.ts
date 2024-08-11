import { NextApiRequest, NextApiResponse } from 'next'
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    //
    return
  }

  const data = req.body

  if (data.typing == 'HTTPS') {
    //
    res.status(200).json({
      msg: '校验成功',
      data: {}
    })
  } else if (data.typing == 'CURL') {
    //
    res.status(200).json({
      msg: '校验成功',
      data: {}
    })
  } else {
    //
    res.status(400).json({ msg: '错误请求' })
    return
  }
}
