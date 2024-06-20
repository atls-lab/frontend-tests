import React          from 'react'

import { useHover }    from '@ui/utils'

import { InputProps }  from './input.interfaces'
import { inputStyles } from './styles'

export const Input: React.FC<InputProps> = ({
  size,
  value,
  type = 'text',
  variant = 'blue',
  disabled,
  onChange,
  ...props
}) => {
  const [hover, hoverProps] = useHover()

  return (
    <input
      className={inputStyles({
        size,
        variant,
        hover: hover ? `${variant}Hover` : undefined,
        disabled: disabled ? `${variant}Disabled` : undefined,
      })}
      onChange={onChange}
      disabled={disabled}
      {...hoverProps}
      {...props}
    />
  )
}
