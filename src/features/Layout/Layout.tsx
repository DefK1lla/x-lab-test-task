import { FC, PropsWithChildren } from 'react'

import Header from 'features/Header/Header'
import SideMenu from 'features/SideMenu/SideMenu'

import s from './layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.content}>
        <aside className={s.sidebar}>
          <SideMenu />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
