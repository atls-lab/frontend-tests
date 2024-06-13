import React                 from 'react'
import { FC }                from 'react'
import { PropsWithChildren } from 'react'
import { useState }          from 'react'

import { useHover }          from '@ui/utils'

import { ButtonProps }       from './button.interfaces'
import { buttonStyles }      from './styles'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  icon,
  iconPlacement,
  size = 'huge',
  variant = 'blue',
  disabled,
  ...props
}) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const [hover, hoverProps] = useHover()
  const onMouseDown = () => setPressed(true)
  const onMouseUp = () => setPressed(false)

  return (
    <button
      className={buttonStyles({
        size,
        variant,
        pressed: pressed ? `${variant}Pressed` : undefined,
        hover: hover ? `${variant}Hover` : undefined,
        disabled: disabled ? `${variant}Disabled` : undefined,
      })}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      disabled={disabled}
      {...hoverProps}
      {...props}
    >
      {children}
    </button>
  )
}
