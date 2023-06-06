import { AddressSearchForm } from 'features'

import AddressList from './components/AddressList/AdressList'

import s from './addressSearch.module.scss'
import { useEffect, useState } from 'react'
import { searchAddress } from 'shared/api/routes/address'

const AddressSearchPage = () => {
  const [addressList, setAddressList] = useState<string[] | null>(
    null
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (value: string) => {
    try {
      setIsLoading(true)
      const res = await searchAddress(value)
      setAddressList(
        res.data.suggestions.map(s => s.unrestricted_value)
      )
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Поиск адресов</h1>
      <p className={s.text}>Введите интересующий вас адрес</p>
      <div className={s.formWrapper}>
        <AddressSearchForm onSubmit={onSubmit} />
      </div>
      <AddressList isLoading={isLoading} list={addressList} />
    </div>
  )
}
export default AddressSearchPage
