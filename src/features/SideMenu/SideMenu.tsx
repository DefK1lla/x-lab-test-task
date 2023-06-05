import { MenuItem, UserProfile } from 'components'
import ROUTES from 'shared/constants/routes'

import s from './sideMenu.module.scss'
import { useWindowDimensions } from 'shared/hooks/use-window-dimensions'
import { SCREEN_MD } from 'shared/constants/breakpoints'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  const { width } = useWindowDimensions()
  return (
    <div className={s.wrapper}>
      {width < SCREEN_MD && (
        <Link className={s.userWrapper} to='/'>
          <UserProfile variant='black' />
        </Link>
      )}
      <h2 className={s.title}>Меню</h2>
      {ROUTES.map(r => (
        <MenuItem key={r.label} {...r} />
      ))}
    </div>
  )
}

export default SideMenu
