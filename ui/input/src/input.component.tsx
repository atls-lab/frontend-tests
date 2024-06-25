'use client'

import React           from 'react'
import { forwardRef }  from 'react'

import { InputProps }  from './input.interfaces'
import { inputStyles } from './styles'

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { size, value, type = 'text', variant = 'blue', disabled, onChange, ...props },
  ref
) => (
  <input
    ref={ref}
    className={inputStyles({
      size,
      variant,
      disabled: disabled ? `${variant}Disabled` : undefined,
    })}
    onChange={onChange}
    disabled={disabled}
    {...props}
  />
))
