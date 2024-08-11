
"use client"

import VerifyToken from "@/app/components/VerifyToken";
import UserApp from "@/app/pages/user/App";
export default () => {
    return (
        <VerifyToken>
            <UserApp>
            </UserApp>
        </VerifyToken>
    )
}