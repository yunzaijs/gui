
"use client"

import { ReactNode, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { isLogin } from "@/app/core/login";
export default ({ children }: {
    children: ReactNode
}) => {
    const router = useRouter();
    useEffect(() => {
        isLogin((err) => {
            if (err) router.push('/')
        })
    }, [])
    return (<>{children}</>)
}