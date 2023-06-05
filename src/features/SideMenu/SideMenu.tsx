import { MenuItem } from 'components'
import ROUTES from 'shared/constants/routes'

import s from './sideMenu.module.scss'

const SideMenu = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Меню</h2>
      {ROUTES.map(r => (
        <MenuItem key={r.label} {...r} />
      ))}
    </div>
  )
}

export default SideMenu
