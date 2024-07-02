import React            from 'react'
import { useEffect }    from 'react'
import { useState }     from 'react'

import { Autocomplete } from './autocomplete.component'
import { ValueType }    from './autocomplete.interfaces'

export default {
  title: 'Components/Autocomplete',
}

const options: ValueType[] = [{ value: 'Neptunium' }, { value: 'Plutonium' }]

export const Base = () => (
  <div style={{ width: '100%', minHeight: 400, paddingTop: 40 }}>
    <Autocomplete value={null} options={options} />
  </div>
)

Base.story = {
  name: 'Базовое',
}

export const WithValue = () => {
  const [value, setValue] = useState<ValueType | null>({ value: 'Neptunium' })

  return (
    <div style={{ minHeight: 400, width: '100%', paddingTop: 40 }}>
      <Autocomplete value={value} options={options} onChange={setValue} />
    </div>
  )
}

WithValue.story = {
  name: 'С значением',
}

export const WithInputChange = () => {
  const [inputOptions, setInputOptions] = useState(options)
  const [value, setValue] = useState<ValueType | null>(null)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    if (!inputValue) {
      setInputOptions(options as any)
    } else {
      setInputOptions(
        options.filter((option) =>
          option.value.toLowerCase().startsWith(inputValue.toLowerCase())) as any
      )
    }
  }, [inputValue])

  return (
    <div style={{ width: '100%', minHeight: 400, paddingTop: 40 }}>
      <Autocomplete
        value={value}
        options={inputOptions}
        onChange={setValue}
        onInputChange={setInputValue}
      />
    </div>
  )
}

WithInputChange.story = {
  name: 'С изменением значения',
}
