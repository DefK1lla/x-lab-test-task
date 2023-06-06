import { FC, PropsWithChildren } from 'react'

import s from './address.module.scss'

const Address: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.address}>{children}</div>
}

export default Address
