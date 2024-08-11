import { NextApiRequest, NextApiResponse } from 'next';
/**
 * *******
 * 请求登录
 * *******
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        //
        return
    }

    const data = req.body;

    /**
     * HTTPS: git clone --depth=1 https://github.com/yunzai-org/yunzaijs.git
     * CURL: curl -L -o yunzaijs.zip https://github.com/yunzai-org/yunzaijs/archive/refs/heads/main.zip
     */

    if (data.typing == 'HTTPS') {
        //
        res.status(200).json({
            "msg": "校验成功",
            "data": {}
        });
    } else if (data.typing == 'CURL') {
        //
        res.status(200).json({
            "msg": "校验成功",
            "data": {}
        });
    } else {
        //
        res.status(400).json({ msg: "错误请求" });
        return
    }
}