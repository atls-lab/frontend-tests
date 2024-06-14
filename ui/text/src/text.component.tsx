import React             from 'react'
import { forwardRef }    from 'react'

import { TextProps }     from './text.interfaces'
import { textSprinkles } from './sprinkles.css'
import { baseStyles }    from './text.css'

export const Text = forwardRef<HTMLSpanElement, TextProps>((
  {
    children,
    cursor,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    lineHeights,
    textAlign,
    ...props
  },
  ref
) => (
  <span
    ref={ref}
    className={`${textSprinkles({
      cursor,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      lineHeights,
      textAlign,
    })}`}
    {...props}
  >
    {children}
  </span>
))
