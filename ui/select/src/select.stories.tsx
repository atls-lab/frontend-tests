import React        from 'react'
import { useState } from 'react'

import { Select }   from './select.component'

export default { title: 'Components/Select' }

export const Base = () => {
  const items = ['Item1', 'Item2', 'Item3']

  const [value, setValue] = useState('Item1')

  return (
    <Select label='Text' placeholder='value' value={value} items={items} onChangeValue={setValue} />
  )
}
