import { FC, PropsWithChildren, useState } from 'react'

import Header from 'features/Header/Header'
import SideMenu from 'features/SideMenu/SideMenu'

import cn from 'classnames'

import s from './layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={s.wrapper}>
      <Header
        isMenuOpen={isOpen}
        onMenuClick={() => setIsOpen(prevState => !prevState)}
      />
      <div className={s.content}>
        <aside className={cn(s.sidebar, { [s.active]: isOpen })}>
          <SideMenu />
        </aside>
        <main className={s.main}>{children}</main>
      </div>
    </div>
  )
}

export default Layout
