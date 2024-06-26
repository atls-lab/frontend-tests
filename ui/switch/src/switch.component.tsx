import React           from 'react'
import { useRef }      from 'react'

import { useSwitch }   from '@ui/utils'

import { Handle }      from './handle'
import { SwitchProps } from './switch.interfaces'
import { Thumb }       from './thumb'

export const Switch: React.FC<SwitchProps> = ({ disabled, checked: defaultValue, onChange }) => {
  const node = useRef<HTMLButtonElement>(null)

  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <Handle ref={node} onClick={setChecked}>
      <Thumb disabled={disabled} checked={checked} />
    </Handle>
  )
}
