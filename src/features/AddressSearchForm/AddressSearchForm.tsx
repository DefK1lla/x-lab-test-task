import { Button, Input } from 'components'

import s from './addressSearchForm.module.scss'

import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'
import { FC, FormEventHandler, useState } from 'react'

interface AddressSearchFormProps {
  onSubmit: (value: string) => void
}

const AddressSearchForm: FC<AddressSearchFormProps> = ({
  onSubmit,
}) => {
  const [value, setValue] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(true)

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault()

    if (value.length > 2) {
      setIsValid(true)
      onSubmit?.(value)
    } else {
      setIsValid(false)
    }
  }

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <Input
        isValid={isValid}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Введите интересующий вас адрес'
      />
      <Button type='submit'>
        <SearchIcon />
        Поиск
      </Button>
    </form>
  )
}

export default AddressSearchForm
