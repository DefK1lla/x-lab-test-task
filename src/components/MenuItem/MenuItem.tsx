import { Link } from 'react-router-dom'

import cn from 'classnames'

import s from './menuItem.module.scss'

import { Route } from 'shared/types/route'
import { FC, useState } from 'react'

interface MenuItemProps extends Route {
  isActive?: (route: Route) => boolean
}

const MenuItem: FC<MenuItemProps> = ({
  label,
  href,
  isActive,
  icon,
  items,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return href ? (
    <Link
      to={href}
      className={cn(s.link, {
        [s.active]: isActive?.({
          label,
          href,
          icon,
          items,
        }),
      })}
    >
      {icon}
      {label}
    </Link>
  ) : (
    <div>
      <button
        className={cn(s.link, s.dropdown, { [s.active]: isOpen })}
        onClick={() => setIsOpen(prevState => !prevState)}
      >
        {icon}
        {label}
      </button>
      {isOpen && (
        <div className={s.inner}>
          {items?.map(i => (
            <MenuItem key={i.label} {...i} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuItem
