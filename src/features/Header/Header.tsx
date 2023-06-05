import { Logo, UserProfile } from 'components'
import s from './header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Link to='/'>
          <Logo variant='white' withText />
        </Link>

        <Link to='/'>
          <UserProfile variant='white' />
        </Link>
      </div>
    </div>
  )
}

export default Header
