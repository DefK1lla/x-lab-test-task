import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import cn from 'classnames'

import s from './button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button {...props} className={cn(s.btn, className)}>
      {children}
    </button>
  )
}

export default Button
