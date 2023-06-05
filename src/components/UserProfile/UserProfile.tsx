import { FC } from 'react'

import cn from 'classnames'

import { ReactComponent as AvatarMock } from 'assets/icons/avatar-mock.svg'

import s from './userProfile.module.scss'

interface UserProfileProps {
  avatar?: string
  name?: string
  variant?: 'white' | 'black'
}

const UserProfile: FC<UserProfileProps> = ({
  avatar,
  name = 'Имя Фамилия',
  variant = 'black',
}) => {
  return (
    <div
      className={cn(s.wrapper, { [s.white]: variant === 'white' })}
    >
      {avatar ? (
        <img className={s.avatar} src={avatar} alt='user avatar' />
      ) : (
        <AvatarMock />
      )}
      <span className={s.name}>{name}</span>
    </div>
  )
}

export default UserProfile
