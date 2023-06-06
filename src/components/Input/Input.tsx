import { FC, InputHTMLAttributes } from 'react'

import cn from 'classnames'

import s from './input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean
}

const Input: FC<InputProps> = ({
  className,
  isValid = true,
  ...props
}) => {
  return (
    <input
      {...props}
      className={cn(s.input, className, { [s.error]: !isValid })}
    />
  )
}

export default Input
