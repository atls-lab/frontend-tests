import React              from 'react'
import { forwardRef }     from 'react'

import { SYMBOL_SPACE }   from './space.constants'
import { SpaceProps }     from './space.interfaces'
import { spaceSprinkles } from './space.css'

export const Space = forwardRef<HTMLSpanElement, SpaceProps>(({ count = 1, ...props }, ref) => {
  const { className, style, otherProps } = spaceSprinkles(props)

  return (
    <span
      ref={ref}
      className={className}
      style={{ ...style, ...otherProps?.style }}
      {...otherProps}
    >
      {SYMBOL_SPACE.repeat(count)}
    </span>
  )
})

Space.defaultProps = {
  display: 'inline-flex',
}
