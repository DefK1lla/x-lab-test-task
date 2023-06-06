import { FC } from 'react'

import { Address } from 'components'

import s from './adressList.module.scss'

interface AddressListProps {
  list: string[] | null
  isLoading?: boolean
}

const AddressList: FC<AddressListProps> = ({
  list,
  isLoading = false,
}) => {
  if (isLoading) return <div className={s.overlay}>Загрузка...</div>
  if (!list || list.length === 0)
    return (
      <div className={s.overlay}>Заполните поле для поиска...</div>
    )
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Адреса</h1>
      <ul className={s.list}>
        {list?.map(a => (
          <li key={a}>
            <Address>{a}</Address>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddressList
