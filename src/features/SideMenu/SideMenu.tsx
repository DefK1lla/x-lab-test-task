import { MenuItem } from 'components'
import ROUTES from 'shared/constants/routes'

import s from './sideMenu.module.scss'

const SideMenu = () => {
  return (
    <div className={s.wrapper}>
      {ROUTES.map(r => (
        <MenuItem key={r.label} {...r} />
      ))}
    </div>
  )
}

export default SideMenu
