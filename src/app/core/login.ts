"use client"

import { KJUR } from 'jsrsasign';

export const isLogin = (callback: (err?: any, data?: any) => any) => {
    const KEY = "yunzai:token"
    const token = localStorage.getItem(KEY)
    if (typeof token != 'string') {
        callback("error")
        return
    }
    try {
        const data = KJUR.jws.JWS.parse(token)?.payloadObj as {
            exp: number
        };
        if (!data) {
            callback("error")
            return
        }
        if (Date.now() + 1000 * 60 * 15 < data.exp) {
            console.log('令牌已过期');
            localStorage.removeItem(KEY)
            callback("error")
            return
        }
        callback()
    } catch {
        callback("error")
        return
    }
}