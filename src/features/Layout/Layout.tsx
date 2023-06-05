import { FC, PropsWithChildren } from 'react'

import Header from 'features/Header/Header'

import s from './layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>{children}</div>
    </div>
  )
}

export default Layout
