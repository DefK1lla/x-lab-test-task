import { AddressSearchForm } from 'features'

import s from './addressSearch.module.scss'

const AddressSearchPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Поиск адресов</h1>
      <p className={s.text}>Введите интересующий вас адрес</p>
      <AddressSearchForm onSubmit={console.log} />
    </div>
  )
}
export default AddressSearchPage
