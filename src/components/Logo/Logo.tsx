import { FC } from 'react'

import cn from 'classnames'

import s from './logo.module.scss'

import { ReactComponent as LogoIcon } from 'assets/icons/logo.svg'

interface LogoProps {
  variant?: 'white' | 'black'
  withText?: boolean
}

const Logo: FC<LogoProps> = ({
  variant = 'black',
  withText = false,
}) => {
  return (
    <div
      className={cn(s.wrapper, { [s.white]: variant === 'white' })}
    >
      <LogoIcon />
      {withText && <span className={s.text}>Wrench CRM</span>}
    </div>
  )
}

export default Logo
