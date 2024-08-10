import { NextApiRequest, NextApiResponse } from 'next';
export default (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ foo: 'hello word' })
    console.log("env", process.env)
}
