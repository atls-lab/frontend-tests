import React              from 'react'

import { CheckboxProps }  from './checkbox.interfaces'
import { checkboxStyles } from './checkbox.styles.css'

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, disabled = false }) => {
  return (
    <label className={checkboxStyles}>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span>Checkbox Label</span>
    </label>
  )
}

export default Checkbox
