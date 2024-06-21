import React             from 'react'
import { forwardRef }    from 'react'

import { TextProps }     from './text.interfaces'
import { textSprinkles } from './text.css'

export const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...props }, ref) => {
  const { className, style, otherProps } = textSprinkles(props)

  return (
    <span
      ref={ref}
      className={className}
      style={{ ...style, ...otherProps?.style }}
      {...otherProps}
    >
      {children}
    </span>
  )
})
