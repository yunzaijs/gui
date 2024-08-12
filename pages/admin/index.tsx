'use clien'

import VerifyToken from '@/app/components/VerifyToken'
import UserApp from '@/app/pages/admin/App'
export default () => {
  return (
    <VerifyToken>
      <UserApp></UserApp>
    </VerifyToken>
  )
}
