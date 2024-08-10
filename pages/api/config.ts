import { existsSync, readFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';

const LOG = () => {
  const cwd = process.cwd()
  const dir = join(cwd, 'yunzai.config.js')
  if (existsSync(dir)) {
    console.log("config", readFileSync(dir, 'utf-8'))
  }
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ msg: 'hello word' })
  LOG()
}
