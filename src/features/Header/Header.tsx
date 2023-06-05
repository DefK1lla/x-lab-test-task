import { Logo, UserProfile } from 'components'
import s from './header.module.scss'
import { Link } from 'react-router-dom'
import { useWindowDimensions } from 'shared/hooks/use-window-dimensions'
import { SCREEN_MD } from 'shared/constants/breakpoints'
import { FC } from 'react'

import cn from 'classnames'

interface HeaderProps {
  onMenuClick?: () => void
  isMenuOpen?: boolean
}

const Header: FC<HeaderProps> = ({
  onMenuClick,
  isMenuOpen = false,
}) => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        {width <= SCREEN_MD && (
          <button
            className={cn(s.burgerBtn, { [s.active]: isMenuOpen })}
            onClick={onMenuClick}
          />
        )}

        <Link to='/'>
          <Logo variant='white' withText />
        </Link>

        {width > SCREEN_MD && (
          <Link to='/'>
            <UserProfile variant='white' />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
